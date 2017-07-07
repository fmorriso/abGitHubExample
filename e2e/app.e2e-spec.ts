import { AbGitHubExamplePage } from './app.po';

describe('ab-git-hub-example App', () => {
  let page: AbGitHubExamplePage;

  beforeEach(() => {
    page = new AbGitHubExamplePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
