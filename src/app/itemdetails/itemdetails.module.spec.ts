import { ItemdetailsModule } from './itemdetails.module';

describe('ItemdetailsModule', () => {
  let itemdetailsModule: ItemdetailsModule;

  beforeEach(() => {
    itemdetailsModule = new ItemdetailsModule();
  });

  it('should create an instance', () => {
    expect(itemdetailsModule).toBeTruthy();
  });
});
