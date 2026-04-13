import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';

const csvFilePath = path.join(process.cwd(), 'src', 'data', 'posts.csv');
const jsonOutputPath = path.join(process.cwd(), 'src', 'data', 'posts.json');

const csvContent = fs.readFileSync(csvFilePath, 'utf-8');
const records = parse(csvContent, { columns: true, skip_empty_lines: true });

fs.writeFileSync(jsonOutputPath, JSON.stringify(records, null, 2));
console.log(`Converted ${records.length} records to ${jsonOutputPath}`);
