import { runTests } from '../test.deps.ts';
import { ActionTests } from './Action.tests.ts';
import { InputTests } from './forms/Input.tests.ts';
import { SlideToggleTests } from './forms/SlideToggle.tests.ts';

runTests({
  ActionTests,
  InputTests,
  SlideToggleTests,
});