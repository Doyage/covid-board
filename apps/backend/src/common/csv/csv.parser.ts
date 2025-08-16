import { parse } from 'csv-parse';
import * as fs from 'fs';

export class CsvParser {
  async parse<T>(filePath: string): Promise<T[]> {
    return new Promise((resolve, reject) => {
      const results: T[] = [];
      fs.createReadStream(filePath)
        .pipe(parse({ columns: true, skip_empty_lines: true }))
        .on('data', (data) => results.push(data as T))
        .on('end', () => resolve(results))
        .on('error', (error: Error) => reject(error));
    });
  }
}
