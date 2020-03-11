import { UploaditemModule } from './uploaditem.module';

describe('UploaditemModule', () => {
  let uploaditemModule: UploaditemModule;

  beforeEach(() => {
    uploaditemModule = new UploaditemModule();
  });

  it('should create an instance', () => {
    expect(uploaditemModule).toBeTruthy();
  });
});
