import * as fs from 'fs';

type resultType = {
  [key: string]: number;
}

class LogSearch {
  constructor(private filePath: string) {}

  search(keywords: Array<string>) {
    try {
      const data: any = fs.readFileSync(this.filePath);
      // console.log(data.toString());

      const lines: Array<String> = data.toString().split('\n');

      let result: resultType = {};
      lines.forEach((line) => {
        keywords.forEach((term) => {
          if (line.includes(term)) {
            result[term] = result[term] ? result[term] + 1 : 1;
          }
        })
      })

      return result;
    } catch (err) {
      console.error(err);
    }
  }
}

const logSearch = new LogSearch('log.log');
// logSearch.search(['Mozilla', 'Google', 'Safari']);
console.log(logSearch.search(['Mozilla', 'Google', 'Safari']));

