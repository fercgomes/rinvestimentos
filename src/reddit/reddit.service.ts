import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as snoowrap from 'snoowrap';
import { portfolioThreadId } from '../constants';

const dds = require('./dds.json');

@Injectable()
export class RedditService {
  private snoowrap: snoowrap;
  private tickerRegex = /[A-Za-z]{4}[0-9]{1,2}/g;

  constructor(public configService: ConfigService) {
    this.snoowrap = new snoowrap({
      userAgent: this.configService.get<string>('USER_AGENT'),
      clientId: this.configService.get<string>('CLIENT_ID'),
      clientSecret: this.configService.get<string>('CLIENT_SECRET'),
      accessToken: this.configService.get<string>('ACCESS_TOKEN'),
      refreshToken: this.configService.get<string>('REFRESH_TOKEN'),
    });
  }

  private async getCommentBodies(threadId: string) {
    return this.snoowrap
      .getSubmission(threadId)
      .fetch()
      .then((comments) => comments.comments.map((comment) => comment.body));
  }

  //   @ts-ignore
  private async getComments2(threadId: string) {
    return this.snoowrap.getSubmission(threadId).fetch();
  }

  private async getCleanComments() {
    const comments = await this.getCommentBodies(portfolioThreadId);

    const c = comments
      .map((comment) => {
        const c = comment.match(this.tickerRegex);
        if (c) return c[0].toUpperCase();
        else return null;
      })
      .filter((item) => item !== null)
      .reduce((prev, curr) => {
        if (prev[curr]) return { ...prev, [curr]: prev[curr] + 1 };
        else return { ...prev, [curr]: 1 };
      }, {});

    return c;
  }

  public async getMostPopularTickers() {
    const res = await this.getComments2(portfolioThreadId);
    const comments = res.comments
      .sort((a, b) => a.score > b.score)
      .map((comment) => {
        const c = comment.body.match(this.tickerRegex);
        if (c) {
          const ticker = c[0].toUpperCase();
          return { ticker: ticker, score: comment.score };
        } else return null;
      })
      .filter((item) => item !== null && item.score > 0)
      .reduce((prev, curr) => {
        const index = prev.findIndex((item) => item.ticker === curr.ticker);
        if (index !== -1) {
          // Item already there, collpase them
          prev[index] = {
            ticker: prev[index].ticker,
            score: prev[index].score + curr.score,
          };
          return prev;
        } else {
          return [...prev, curr];
        }
      }, []);

    return comments;
  }

  public async getSubmission(submissionId: string) {
    // @ts-ignore
    const submission = await this.snoowrap.getSubmission(submissionId).fetch();
    return {
      id: submissionId,
      title: submission.title,
      author: submission.author.name,
      score: submission.score,
      date: submission.created_utc,
      body: submission.selftext,
      link: submission.permalink,
    };
  }

  public async getDueDilligencePosts() {
    const submissions = [];
    for (const dd of dds) {
      // @ts-ignore
      const submission: snoowrap.Submission = await this.snoowrap
        .getSubmission(dd.submissionId)
        .fetch();

      submissions.push({
        ticker: dd.ticker,
        submission: {
          id: dd.submissionId,
          title: submission.title,
          author: submission.author.name,
          score: submission.score,
          date: submission.created_utc,
          body: submission.selftext_html,
          link: submission.permalink,
        },
      });
    }
    return submissions;
  }
}
