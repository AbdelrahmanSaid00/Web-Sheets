import { promises as fs } from 'fs';
import path from 'path';
import { User } from '../data/user';

const filePath = path.join(__dirname, '../../users.json');

export async function readJsonFile(): Promise<User[]> {
    try {
        await fs.access(filePath);
        const data = await fs.readFile(filePath, 'utf-8');
        return JSON.parse(data) as User[];
    }
    catch (e) {
        throw new Error(`Failed to read users.json${e}`);
    }
}

export async function writeJFile(file: any, data: any) {
    try {
        if (await exists(file)) {
            const rawData = await fs.readFile(file, 'utf8');
            const submissions = rawData.trim() ? JSON.parse(rawData) : [];
            submissions.push(data);
            await fs.writeFile(file, JSON.stringify(submissions, null, 2));
        }
        else {
            await fs.writeFile(file, JSON.stringify([data], null, 2));
        }
    }
    catch (error) {
        console.log(error);
    }
}

async function exists(file: any) {
    try {
        await fs.access(file);
        return true;
    } catch (err) {
        return false;
    }
}
