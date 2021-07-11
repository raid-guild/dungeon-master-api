const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Consultation {
    id: ID!
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
    submission_date: String!
    feedback: String
    rating: Int
    raid: Raid
  }

  type Application {
    _id: String!
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
    submission_date: String
  }

  type Member {
    _id: String!
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
  }

  type Raid {
    _id: String
    raid_name: String!
    status: String!
    category: String!
    cleric_name: String!
    roles_required: [String!]
    raid_party: RaidParty
    invoice_address: String
    start_date: String
    end_date: String
    comments: [Comment!]
    related_raids: [Raid!]
    portfolio: Portfolio
  }

  type Portfolio {
    _id: String!
    project_name: String!
    project_desc: String
    category: String
    roles: [String!]
    case_study: String
    repo_link: String
    result_link: String
  }

  type RaidParty {
    _id: String!
    members: [Member!]!
    raid: Raid!
  }

  type Comment {
    _id: String!
    comment: String!
    commented_by: Member!
    commented_on: String!
    commented_raid: Raid!
  }

  type Query {
    consultations: [Consultation]
    applications: [Application]
    members: [Member]
    raids: [Raid]
    portfolios: [Portfolio]
    raidparties: [RaidParty]
    comments: [Comment]
  }

  input RaidInput {
    _id: String!
    raid_name: String!
    status: String!
    category: String!
    cleric_name: String!
    roles_required: [String!]
    # raid_party: RaidParty
    invoice_address: String
    start_date: String
    end_date: String
    # comments: [Comment!]
    # related_raids: [Raid!]
    # portfolio: Portfolio
  }

  type Mutation {
    createRaid(raid: RaidInput): Raid!
    createPortfolio(
      _id: String!
      project_name: String
      project_desc: String
      category: String
      roles: [String!]
      case_study: String
      repo_link: String
      result_link: String
    ): Portfolio!
    updateConsultation(_id: String!, raid_id: String!): Consultation!
    updateApplication(_id: String!, referrer_id: String!): Application!
    updateRaid(
      _id: String!
      raid_name: String
      status: String
      category: String
      cleric_name: String
      roles_required: [String!]
      raid_party: String
      invoice_address: String
      start_date: String
      end_date: String
      comment: [String!]
      related_raids: [String!]
      portfolio: String
    ): Raid!
    updateMember(
      _id: String!
      name: String
      email_address: String
      discord_handle: String
      telegram_handle: String
      github_handle: String
      eth_address: String
      ens_name: String
      guild_class: String
      primary_skills: [String!]
      secondary_skills: [String!]
      membership_date: String
      is_raiding: Boolean
      championed_by: String
      application: String
    ): Member!
    updatePortfolio(
      _id: String!
      project_name: String
      project_desc: String
      category: String
      roles: [String!]
      case_study: String
      repo_link: String
      result_link: String
    ): Portfolio!
  }
`;

module.exports = { typeDefs };
