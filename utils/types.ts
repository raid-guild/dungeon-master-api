/* eslint-disable no-use-before-define */
import { PopulatedDoc } from 'mongoose';

export type Skills = string[];

export type SkillType = string;

export type DaoFamiliarity = string;

export type CohortAvailability = string;

export type PreferredContact = string;

export type ProjectType = string;

export type ProjectSpecs = string;

export type Services = string[];

export type Budget = string;

export type DeliveryPriorities = string;

export type SubmissionType = string;

export type GuildClass = string;

export type RaidCategory = string;

export type RaidStatus = string;

export type RaidLegacy = {
  airtable_id: string;
  escrow_index: number;
  locker_hash: string;
};

export interface ApplicationInterface {
  name: string;
  email_address: string;
  discord_handle: string;
  telegram_handle?: string;
  github_handle: string;
  eth_address: string;
  ens_name?: string;
  introduction: string;
  learning_goals: string;
  primary_skills: Skills;
  secondary_skills: Skills;
  skill_type: SkillType;
  passion: string;
  favorite_media: string;
  crypto_thrills: string;
  why_raidguild: string;
  dao_familiarity: DaoFamiliarity;
  availability: CohortAvailability;
  crypto_exp: string;
  comments?: string;
  handbook_read: boolean;
  pledge_readiness: boolean;
  referred_by: PopulatedDoc<MemberInterface>;
}

export interface CommentInterface {
  comment: string;
  commented_by: PopulatedDoc<MemberInterface>;
  commented_raid: PopulatedDoc<RaidInterface>;
}

export interface ConsultationInterface {
  project_name: string;
  contact_name: string;
  contact_email: string;
  contact_bio: string;
  contact_discord?: string;
  contact_telegram?: string;
  preferred_contact: PreferredContact;
  project_type: ProjectType;
  project_specs: ProjectSpecs;
  specs_link?: string;
  project_desc: string;
  services_req: Services;
  desired_delivery: string;
  budget: Budget;
  delivery_priorities: DeliveryPriorities;
  additional_info: string;
  submission_type: SubmissionType;
  consultation_hash?: string;
  feedback?: string;
  rating?: number;
  raid?: PopulatedDoc<RaidInterface>;
}

export interface MemberInterface {
  legacy_id: string;
  name: string;
  email_address: string;
  discord_handle: string;
  telegram_handle?: string;
  github_handle?: string;
  eth_address: string;
  ens_name?: string;
  guild_class: GuildClass;
  primary_skills: Skills;
  secondary_skills: Skills;
  membership_date: string;
  is_raiding: boolean;
  championed_by?: PopulatedDoc<MemberInterface>;
  application?: PopulatedDoc<ApplicationInterface>;
}

export interface PortfolioInterface {
  project_name: string;
  project_desc: string;
  category: RaidCategory;
  roles: GuildClass[];
  case_study: string;
  repo_link: string;
  result_link: string;
}

export interface RaidInterface {
  raid_name: string;
  status: RaidStatus;
  category: RaidCategory;
  cleric: string;
  roles_required?: GuildClass[];
  raid_party?: PopulatedDoc<RaidPartyInterface>;
  invoice_address?: string;
  start_date?: string;
  end_date?: string;
  comments?: PopulatedDoc<CommentInterface[]>;
  related_raids?: PopulatedDoc<RaidInterface[]>;
  portfolio?: PopulatedDoc<PortfolioInterface>;
  legacy?: RaidLegacy;
}

export interface RaidPartyInterface {
  members: PopulatedDoc<MemberInterface[]>;
  raid: PopulatedDoc<RaidInterface>;
}
