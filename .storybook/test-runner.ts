import type { TestRunnerConfig } from '@storybook/test-runner';
import { toMatchImageSnapshot } from 'jest-image-snapshot';

const config: TestRunnerConfig = {
  setup() {
    expect.extend({ toMatchImageSnapshot });
  },
  async postVisit(page, context) {
    // Wait for content to settle
    await page.waitForTimeout(500);

    // Take a screenshot of the story
    const image = await page.screenshot();

    // Compare to baseline
    expect(image).toMatchImageSnapshot({
      customSnapshotsDir: `${process.cwd()}/__image_snapshots__`,
      customSnapshotIdentifier: context.id,
      failureThreshold: 0.01,
      failureThresholdType: 'percent',
    });
  },
};

export default config;
