import { ProductLabelPipe } from './product-label.pipe';

describe('ProductLabelPipe', () => {
  it('create an instance', () => {
    const pipe = new ProductLabelPipe();
    expect(pipe).toBeTruthy();
  });
});
