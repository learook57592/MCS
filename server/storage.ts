import { inquiries, type InsertInquiry, type Inquiry } from "@shared/schema";

export interface IStorage {
  createInquiry(inquiry: InsertInquiry): Promise<Inquiry>;
}

export class DatabaseStorage implements IStorage {
  async createInquiry(insertInquiry: InsertInquiry): Promise<Inquiry> {
    const { db } = await import("./db");
    const [inquiry] = await db
      .insert(inquiries)
      .values(insertInquiry)
      .returning();
    return inquiry;
  }
}

export class MemoryStorage implements IStorage {
  private inquiries: Inquiry[] = [];
  private nextId = 1;

  async createInquiry(insertInquiry: InsertInquiry): Promise<Inquiry> {
    const inquiry: Inquiry = {
      id: this.nextId++,
      name: insertInquiry.name,
      company: insertInquiry.company,
      phone: insertInquiry.phone,
      message: insertInquiry.message ?? null,
      createdAt: new Date(),
    };

    this.inquiries.push(inquiry);
    return inquiry;
  }
}

export const storage = process.env.DATABASE_URL
  ? new DatabaseStorage()
  : new MemoryStorage();
