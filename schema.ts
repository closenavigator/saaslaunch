import { pgTable, serial, varchar, timestamp, text } from 'drizzle-orm/pg-core';

export const user = pgTable('user', {
  id: serial('id').primaryKey(),
  created_time: timestamp('created_time').defaultNow(),
  email: varchar('email', { length: 255 }).unique().notNull(),
  first_name: varchar('first_name', { length: 255 }),
  last_name: varchar('last_name', { length: 255 }),
  gender: varchar('gender', { length: 50 }),
  profile_image_url: text('profile_image_url'),
  user_id: varchar('user_id', { length: 255 }).unique().notNull(),
  subscription: varchar('subscription', { length: 255 })
});

export const payments = pgTable('payments', {
  id: serial('id').primaryKey(),
  created_time: timestamp('created_time').defaultNow(),
  stripe_id: varchar('stripe_id', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).notNull(),
  amount: varchar('amount', { length: 255 }).notNull(),
  payment_time: varchar('payment_time', { length: 255 }).notNull(),
  payment_date: varchar('payment_date', { length: 255 }).notNull(),
  currency: varchar('currency', { length: 50 }).notNull(),
  user_id: varchar('user_id', { length: 255 }).notNull(),
  customer_details: text('customer_details').notNull(),
  payment_intent: varchar('payment_intent', { length: 255 }).notNull()
});

export const subscriptions = pgTable('subscriptions', {
  id: serial('id').primaryKey(),
  created_time: timestamp('created_time').defaultNow(),
  subscription_id: varchar('subscription_id', { length: 255 }).notNull(),
  stripe_user_id: varchar('stripe_user_id', { length: 255 }).notNull(),
  status: varchar('status', { length: 50 }).notNull(),
  start_date: varchar('start_date', { length: 255 }).notNull(),
  end_date: varchar('end_date', { length: 255 }),
  plan_id: varchar('plan_id', { length: 255 }).notNull(),
  default_payment_method_id: varchar('default_payment_method_id', { length: 255 }),
  email: varchar('email', { length: 255 }).notNull(),
  user_id: varchar('user_id', { length: 255 }).notNull()
});

export const subscriptions_plans = pgTable('subscriptions_plans', {
  id: serial('id').primaryKey(),
  created_time: timestamp('created_time').defaultNow(),
  plan_id: varchar('plan_id', { length: 255 }).notNull(),
  name: varchar('name', { length: 255 }).notNull(),
  description: text('description').notNull(),
  amount: varchar('amount', { length: 255 }).notNull(),
  currency: varchar('currency', { length: 50 }).notNull(),
  interval: varchar('interval', { length: 50 }).notNull()
});

export const invoices = pgTable('invoices', {
  id: serial('id').primaryKey(),
  created_time: timestamp('created_time').defaultNow(),
  invoice_id: varchar('invoice_id', { length: 255 }).notNull(),
  subscription_id: varchar('subscription_id', { length: 255 }).notNull(),
  amount_paid: varchar('amount_paid', { length: 255 }).notNull(),
  amount_due: varchar('amount_due', { length: 255 }).notNull(),
  currency: varchar('currency', { length: 50 }).notNull(),
  status: varchar('status', { length: 50 }).notNull(),
  email: varchar('email', { length: 255 }).notNull(),
  user_id: varchar('user_id', { length: 255 })
});