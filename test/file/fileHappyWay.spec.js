import readFile from '../../src/handler/fileHandler';
import { getAbsoluteFromRelativePath } from '../../src/utils/utils'


describe("readFile test path", () => {
  test("it should return a array of lines inside file", async () => {
    const rightLines = [
      'LS SF 1',
      'SF LS 2',
      'LS LV 1',
      'LV LS 1',
      'SF LV 2',
      'LV SF 2',
      'LS RC 1',
      'RC LS 2',
      'SF WS 1',
      'WS SF 2',
      'LV BC 1',
      'BC LV 1',
    ];
    const relativePath = '/sampleData/path/example-00.txt';
    const absolutePath = getAbsoluteFromRelativePath( relativePath );
    const lines = await readFile( absolutePath );
    expect( lines ).toEqual( rightLines );
  });
});
