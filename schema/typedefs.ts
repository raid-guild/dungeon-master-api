import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Consultation {
    _id: ID!
    project_name: String!
    contact_name: String!
    contact_email: String!
    contact_bio: String!
    contact_discord: String
    contact_telegram: String
    preferred_contact: String!
    project_type: String!
    project_specs: String!
    specs_link: String
    project_desc: String!
    services_req: [String!]!
    desired_delivery: String
    budget: String!
    delivery_priorities: String!
    additional_info: String!
    submission_type: String!
    consultation_hash: String
    feedback: String
    rating: Int
    raid: Raid
    createdAt: String!
    modifiedAt: String!
  }

  type Application {
    _id: ID!
    name: String!
    email_address: String!
    discord_handle: String!
    telegram_handle: String
    github_handle: String
    eth_address: String!
    ens_name: String
    introduction: String!
    learning_goals: String!
    primary_skills: [String!]!
    secondary_skills: [String!]!
    skill_type: String!
    passion: String!
    favorite_media: String!
    crypto_thrills: String!
    why_raidguild: String!
    dao_familiarity: String!
    availability: String!
    crypto_exp: String!
    comments: String!
    handbook_read: Boolean!
    pledge_readiness: Boolean!
    referred_by: Member
    createdAt: String!
    modifiedAt: String!
  }

  type Member {
    _id: ID!
    legacy_id: String!
    name: String!
    email_address: String!
    discord_handle: String!
    telegram_handle: String
    github_handle: String
    eth_address: String!
    ens_name: String
    guild_class: String!
    primary_skills: [String!]!
    secondary_skills: [String!]!
    membership_date: String!
    is_raiding: Boolean!
    championed_by: Member
    application: Application
    createdAt: String!
    modifiedAt: String!
  }

  type RaidLegacy {
    airtable_id: ID!
    escrow_index: Int
    locker_hash: String
  }

  type Raid {
    _id: ID!
    raid_name: String!
    status: String!
    category: String!
    cleric: Member!
    roles_required: [String!]
    raid_party: RaidParty
    invoice_address: String
    start_date: String
    end_date: String
    comments: [Comment!]
    related_raids: [Raid!]
    portfolio: Portfolio
    legacy: RaidLegacy
    createdAt: String!
    modifiedAt: String!
  }

  type Portfolio {
    _id: ID!
    project_name: String!
    project_desc: String
    category: String
    roles: [String!]
    case_study: String
    repo_link: String
    result_link: String
    createdAt: String!
    modifiedAt: String!
  }

  type RaidParty {
    _id: ID!
    members: [Member!]!
    raid: Raid!
    createdAt: String!
    modifiedAt: String!
  }

  type Comment {
    _id: ID!
    comment: String!
    commented_by: Member!
    commented_raid: Raid!
    createdAt: String!
    modifiedAt: String!
  }

  type Query {
    consultations: [Consultation]
    applications: [Application]
    members: [Member]
    raids: [Raid]
    portfolios: [Portfolio]
    raidparties: [RaidParty]
    comments: [Comment]

    consultation(_id: String): Consultation
    application(_id: String): Consultation
    member(filters: MemberFilter): Member
    raid(_id: String): Raid
    raidparty(_id: String): RaidParty
    portfolio(_id: String): Consultation
    comment(_id: String): Comment
  }

  input MemberFilter {
    _id: String
    eth_address: String
  }
`;
