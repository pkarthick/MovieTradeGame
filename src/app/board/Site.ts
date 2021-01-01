export class PlayerInfo {
  constructor(
    public name: string,
    public symbol: string,
    public color: string,
    public currentSite: Site,
    public cash: number = 5000
  ) {

  }
}

export class Site {

  public visitors: PlayerInfo[] = [];
  public owner: PlayerInfo | null = null;

  constructor (
    public loc: number,
    public name: string,
    public price: number,
    public rent: number,
    public type: SiteType,
    public location: SiteLocation,
    public payee: PayeeType,
    public payer: PayerType,
    public color: string = 'darkgray',
    public basedOnDice = false) {
  }
}

export enum SiteType {
  General = 0,
  CommonWealth = 1,
  Chance = 2,
  IncomeTax = 3,
  WealthTax = 4,
  Start = 5,
  Jail = 6,
  Club = 7,
  RestHouse = 8
}

export enum Announcement {
  None = 0,
  InsufficientCashToBuyProperty = 1,
  InsufficientCashToPayRent = 2,
  Movement = 3,
  PaidRent = 4,
  PaidIncomeTax = 5,
  PaidWealthTax = 6,
  PaidClub = 7,
  CollectedResort = 8,
  Jail = 9,
  CollectedStart = 10
}

export enum Action {
  RollDicePrompt,
  BuyPrompt,
  Information
}

export enum SiteLocation {
  Corner,
  Middle
}

export enum PayeeType {
  Player,
  AllPlayers,
  Bank
}

export enum PayerType {
  Player,
  AllPlayers,
  Bank
}



