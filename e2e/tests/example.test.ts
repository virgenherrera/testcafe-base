import { Selector, t } from 'testcafe';
import testcafeExamplePage from '../pages/testcafe-example.page';
import { getWindowLocation } from '../utils';

fixture(`e2e:${testcafeExamplePage.page}`).page(testcafeExamplePage.page);

test('Should Login with a valid user', async () => {
  await testcafeExamplePage.fillForm();

  await t.expect(getWindowLocation()).contains('thank-you.html');
  await t
    .expect(Selector('#article-header').textContent)
    .contains(testcafeExamplePage.username);
});
