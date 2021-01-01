declare var $: any;

import { Component, OnInit } from '@angular/core';
import { Site, SiteType, PayeeType, PayerType, SiteLocation, PlayerInfo, Action, Announcement } from './Site';

@Component({
  selector: 'app-board',
  templateUrl: 'board.component.html',
  styleUrls: [ 'board.component.css' ]
})

export class BoardComponent implements OnInit {


  allSites: Site[] = [
    new Site( 0, 'S T A R T', 0, 5000, SiteType.Start, SiteLocation.Corner, PayeeType.AllPlayers, PayerType.Bank, 'lightgrey'),
    new Site( 1, 'Angry Birds', 10000, 3300, SiteType.General, SiteLocation.Middle, PayeeType.AllPlayers, PayerType.Bank, 'deepskyblue'),
    new Site( 2, 'Smurfs 3', 9000, 3000, SiteType.General, SiteLocation.Middle, PayeeType.AllPlayers, PayerType.Bank, 'deepskyblue'),
    new Site( 3, 'Jumanji 2', 12000, 4000, SiteType.General, SiteLocation.Middle, PayeeType.AllPlayers, PayerType.Bank, 'deepskyblue'),
    new Site( 4, 'Despicable Me 3', 9000, 3000, SiteType.General, SiteLocation.Middle, PayeeType.AllPlayers, PayerType.Bank, 'goldenrod'),
    new Site( 5, 'Income Tax', 0, 500, SiteType.IncomeTax, SiteLocation.Middle, PayeeType.Bank, PayerType.Player, 'grey'),
    new Site( 6, 'Secret Life of Pets', 8000, 2600, SiteType.General, SiteLocation.Middle, PayeeType.AllPlayers, PayerType.Bank, 'goldenrod'),
    new Site( 7, 'Fate of the Furious', 8000, 2600, SiteType.General, SiteLocation.Middle, PayeeType.AllPlayers, PayerType.Bank, 'goldenrod'),
    new Site( 8, 'Dead Pool', 7000, 2300, SiteType.General, SiteLocation.Middle, PayeeType.AllPlayers, PayerType.Bank, 'Crimson'),
    new Site( 9, 'Civil War', 9000, 3000, SiteType.General, SiteLocation.Middle, PayeeType.AllPlayers, PayerType.Bank, 'Crimson'),
    new Site( 10, 'Chance', 0, 500, SiteType.Chance, SiteLocation.Middle, PayeeType.Player, PayerType.Bank, 'grey', true),
    new Site( 11, 'Logan', 8000, 2600, SiteType.General, SiteLocation.Middle, PayeeType.AllPlayers, PayerType.Bank, 'Crimson'),
    new Site( 12, 'X-Men Apocalypse', 9000, 3000, SiteType.General, SiteLocation.Middle, PayeeType.AllPlayers, PayerType.Bank, 'Crimson'),
    new Site( 13, 'C L U B', 0, 500, SiteType.Club, SiteLocation.Corner, PayeeType.Player, PayerType.AllPlayers, 'lightgrey'),
    new Site( 14, 'Thor Ragnarok', 15000, 5000, SiteType.General, SiteLocation.Middle, PayeeType.AllPlayers, PayerType.Bank, 'Crimson'),
    new Site( 15, 'Doctor Strange', 12000, 4000, SiteType.General, SiteLocation.Middle, PayeeType.AllPlayers, PayerType.Bank, 'Crimson'),
    new Site( 16, 'Guardians of the Galaxy 2', 10000, 3300, SiteType.General, SiteLocation.Middle, PayeeType.AllPlayers, PayerType.Bank, 'Crimson'),
    new Site( 17, 'Common Wealth', 0, 500, SiteType.CommonWealth, SiteLocation.Middle, PayeeType.Bank, PayerType.Player, 'grey'),
    new Site( 18, 'Spider Man - Home Coming', 11000, 3600, SiteType.General, SiteLocation.Middle, PayeeType.AllPlayers, PayerType.Bank, 'Crimson'),
    new Site( 19, 'Black Panther', 15000, 5000, SiteType.General, SiteLocation.Middle, PayeeType.AllPlayers, PayerType.Bank, 'Crimson'),
    new Site( 20, 'J A I L', 0, 2000, SiteType.Jail, SiteLocation.Corner, PayeeType.Bank, PayerType.Player, 'lightgrey'),
    new Site( 21, 'Rogue One', 12000, 4000, SiteType.General, SiteLocation.Middle, PayeeType.AllPlayers, PayerType.Bank, 'CornflowerBlue'),
    new Site( 22, 'Star Wars - The Last Jedi', 13500, 4500, SiteType.General, SiteLocation.Middle, PayeeType.AllPlayers, PayerType.Bank, 'CornflowerBlue'),
    new Site( 23, 'Ice Age 5', 8000, 2600, SiteType.General, SiteLocation.Middle, PayeeType.AllPlayers, PayerType.Bank, 'CornflowerBlue'),
    new Site( 24, 'Batman Vs Superman', 8000, 2600, SiteType.General, SiteLocation.Middle, PayeeType.AllPlayers, PayerType.Bank, 'YellowGreen'),
    new Site( 25, 'Wonder Woman', 9000, 3000, SiteType.General, SiteLocation.Middle, PayeeType.AllPlayers, PayerType.Bank, 'YellowGreen'),
    new Site( 26, 'Wealth Tax', 0, 500, SiteType.WealthTax, SiteLocation.Middle, PayeeType.Bank, PayerType.Player, 'grey'),
    new Site( 27, 'Justice League', 9000, 3000, SiteType.General, SiteLocation.Middle, PayeeType.AllPlayers, PayerType.Bank, 'YellowGreen'),
    new Site( 28, 'Jungle Book', 8000, 2600, SiteType.General, SiteLocation.Middle, PayeeType.AllPlayers, PayerType.Bank, 'HotPink'),
    new Site( 29, 'Beauty and the Beast', 10000, 3300, SiteType.General, SiteLocation.Middle, PayeeType.AllPlayers, PayerType.Bank, 'HotPink'),
    new Site( 30, 'Chance', 0, 500, SiteType.Chance, SiteLocation.Middle, PayeeType.Player, PayerType.Bank, 'grey', true),
    new Site( 31, 'Storks', 10000, 3300, SiteType.General, SiteLocation.Middle, PayeeType.AllPlayers, PayerType.Bank, 'HotPink'),
    new Site( 32, 'Finding Dory', 12000, 4000, SiteType.General, SiteLocation.Middle, PayeeType.AllPlayers, PayerType.Bank, 'HotPink'),
    new Site( 33, 'R E S O R T', 0, 500, SiteType.RestHouse, SiteLocation.Corner, PayeeType.AllPlayers, PayerType.AllPlayers, 'lightgrey'),
    new Site( 34, 'Zootopia', 12000, 4000, SiteType.General, SiteLocation.Middle, PayeeType.AllPlayers, PayerType.Bank, 'HotPink'),
    new Site( 35, 'Barbie Dreamtopia', 6000, 2000, SiteType.General, SiteLocation.Middle, PayeeType.Bank, PayerType.Player, 'HotPink'),
    new Site( 36, 'Coco', 8000, 2600, SiteType.General, SiteLocation.Middle, PayeeType.AllPlayers, PayerType.Bank, 'HotPink'),
    new Site( 37, 'Common Wealth', 0, 500, SiteType.CommonWealth, SiteLocation.Middle, PayeeType.Bank, PayerType.Player, 'grey'),
    new Site( 38, 'Trolls', 12000, 4000, SiteType.General, SiteLocation.Middle, PayeeType.AllPlayers, PayerType.Bank, 'HotPink'),
    new Site( 39, 'Moana', 12000, 4000, SiteType.General, SiteLocation.Middle, PayeeType.AllPlayers, PayerType.Bank, 'HotPink'),

  ];

  topSites: Site[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map(i => this.allSites[i]);

  rightSites: Site[] = [14, 15, 16, 17, 18, 19].map(i => this.allSites[i]);

  bottomSites: Site[] = [33, 32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20].map(i => this.allSites[i]);

  leftSites: Site[] = [39, 38, 37, 36, 35, 34].map(i => this.allSites[i]);

  players: PlayerInfo[] = [
    new PlayerInfo( 'Nikhil', 'fa fa-bolt', 'orangered', this.allSites[0]),
    new PlayerInfo( 'Netra', 'fa fa-gem', 'deeppink', this.allSites[0] ),
    new PlayerInfo( 'Dhanya', 'fa fa-heart', 'orange', this.allSites[0] ),
    new PlayerInfo( 'Oviya', 'fa fa-smile', 'purple', this.allSites[0] ),
    new PlayerInfo( 'Darshith', 'fa fa-motorcycle', 'deepskyblue', this.allSites[0] ),
    new PlayerInfo( 'Kavin', 'fa fa-moon', 'dodgerblue', this.allSites[0] )
  ];

  constructor() {
    this.allSites[0].visitors = this.players;
  }

  playerTurnPrev = 0;
  playerTurn = 0;
  diceValue1 = 3;
  diceValue2 = 3;
  currentAction = Action.RollDicePrompt;
  announcement = Announcement.None;

  incomeTax = 500;
  wealthTax = 100;
  jailFine = 2000;
  startAmount = 5000;
  clubAmount = 500;
  resortAmount = 500;

  jailLoc = 20;
  wealthTaxLoc = 25;
  incomeTaxLoc = 5;
  clubLoc = 13;
  resortLoc = 33;
  startLoc = 0;

  ngOnInit() {
    this.currentAction = Action.RollDicePrompt;
  }

  getPropertyValue(player: PlayerInfo) {
    let sum = 0;
    this.allSites.filter(si => si.owner === player).forEach(si => sum += si.price);
    return sum;
  }

  takeAction(fromGoTo = false) {

    this.announcement = Announcement.None;

    if (this.currentPlayer.currentSite.type === SiteType.General) {
      if (this.currentPlayer.currentSite.owner) {
        if (this.currentPlayer.currentSite.owner !== this.currentPlayer) {
          this.payRent();
          this.announcement = Announcement.PaidRent;
        } else {
          this.announcement = Announcement.Movement;
        }
      } else {
        if (this.currentPlayer.cash >= this.currentPlayerSite.price) {
          this.currentAction = Action.BuyPrompt;
          return;
        } else {
          this.announcement = Announcement.InsufficientCashToBuyProperty;
        }
      }
    } else if (this.currentPlayer.currentSite.type === 1) {
      this.announcement = Announcement.Movement;
      if (!fromGoTo) {
        this.handleCommonWealth();
      }
    } else if (this.currentPlayer.currentSite.type === 2) {
      this.announcement = Announcement.Movement;
      if (!fromGoTo) {
        this.handleChance();
      }
    } else if (this.currentPlayer.currentSite.type === 3) {
      this.payIncomeTax();
    } else if (this.currentPlayer.currentSite.type === 4) {
      this.payWealthTax();
    } else if (this.currentPlayer.currentSite.type === 5) {
      this.collectStartPayment();
    } else if (this.currentPlayer.currentSite.type === 6) {
      this.handleJailSituation();
    } else if (this.currentPlayer.currentSite.type === 7) {
      this.payForClub();
    } else if (this.currentPlayer.currentSite.type === 8) {
      this.collectForResort();
    } else {

    }

    this.changePlayer();

  }

  handleCommonWealth() {
    const diceValue = this.diceValue1 + this.diceValue2;
    switch (diceValue) {
      case 1: {
        this.collectStartPayment();
        this.goToSite(this.startLoc);
        break;
      }
      case 2: {
        this.currentPlayer.cash += 3000;
        break;
      }
      case 3: {
        this.currentPlayer.cash += 2000;
        break;
      }
      case 4: {
        this.collectForResort();
        this.goToSite(this.resortLoc);
        break;
      }
      case 5: {
        this.currentPlayer.cash -= 2000;
        break;
      }
      case 6: {
        this.payIncomeTax();
        // this.goToSite(this.incomeTaxLoc);
        break;
      }
      case 7: {
        this.payForClub();
        this.goToSite(this.clubLoc);
        break;
      }
      case 8: {
        this.currentPlayer.cash -= 3000;
        break;
      }
      case 9: {
        this.handleJailSituation();
        this.goToSite(this.jailLoc);
        break;
      }
      case 10: {
        this.currentPlayer.cash += 1000;
        break;
      }
      case 11: {
        this.currentPlayer.cash -= 1000;
        break;
      }
      case 12: {
        this.payWealthTax();
        // this.goToSite(this.wealthTaxLoc);
        break;
      }
    }
  }

  handleChance() {
    const diceValue = this.diceValue1 + this.diceValue2;
    switch (diceValue) {
      case 1: {
        this.currentPlayer.cash += 1000;
        break;
      }
      case 2: {
        this.currentPlayer.cash -= 1000;
        break;
      }
      case 3: {
        this.goToSite(this.jailLoc);
        this.handleJailSituation();
        break;
      }
      case 4: {
        // this.goToSite(this.wealthTaxLoc);
        this.payWealthTax();
        break;
      }
      case 5: {
        // this.goToSite(this.incomeTaxLoc);
        this.payIncomeTax();
        break;
      }
      case 6: {
        this.goToSite(this.clubLoc);
        this.payForClub();
        break;
      }
      case 7: {
        this.goToSite(this.resortLoc);
        this.collectForResort();
        break;
      }
      case 8: {
        this.currentPlayer.cash -= 2000;
        break;
      }
      case 9: {
        this.currentPlayer.cash -= 3000;
        break;
      }
      case 10: {
        this.currentPlayer.cash += 2000;
        break;
      }
      case 11: {
        this.currentPlayer.cash += 3000;
        break;
      }
      case 12: {
        this.goToSite(this.startLoc);
        this.collectStartPayment();
        break;
      }

    }
  }

  goToSite(loc: number) {
    const curloc = this.currentPlayer.currentSite.loc;

    if (curloc > loc) {
      this.currentPlayer.cash += this.startAmount;
    }

    this.allSites[curloc].visitors = this.allSites[curloc].visitors.filter(vis => vis.name !== this.currentPlayer.name);
    this.allSites[loc].visitors.push(this.currentPlayer);
    this.currentPlayer.currentSite = this.allSites[loc];
    // this.takeAction(true);
  }

  getCurrentPlayerSites() {
    return this.allSites.filter(si => si.owner === this.currentPlayer);
  }

  payIncomeTax() {
    this.currentPlayer.cash -= this.incomeTax;
    this.announcement = Announcement.PaidIncomeTax;
    this.currentAction = Action.RollDicePrompt;
  }

  getWealthTax() {
    if (this.getCurrentPlayerSites().length === 0 ) {
      return 500;
    } else {
      return this.wealthTax * this.getCurrentPlayerSites().length;
    }
  }

  payWealthTax() {
    this.currentPlayer.cash -= this.getWealthTax();
    this.announcement = Announcement.PaidWealthTax;
  }

  collectStartPayment() {
    this.currentPlayer.cash += this.startAmount;
    this.announcement = Announcement.CollectedStart;
  }

  handleJailSituation() {
    this.currentPlayer.cash -= this.jailFine;
    this.announcement = Announcement.Movement;
  }

  payForClub() {
    this.players.forEach(player => {
      this.currentPlayer.cash -= this.clubAmount;
      player.cash += this.clubAmount;
    });
    this.announcement = Announcement.PaidClub;
  }

  collectForResort() {
    this.players.forEach(player => {
      this.currentPlayer.cash += this.resortAmount;
      player.cash -= this.resortAmount;
    });
    this.announcement = Announcement.CollectedResort;
  }

  payRent() {
    if (this.currentPlayer.currentSite.owner != null) {
      this.currentPlayer.currentSite.owner.cash += this.currentPlayer.currentSite.rent;
      this.currentPlayer.cash -= this.currentPlayer.currentSite.rent;
      this.announcement = Announcement.PaidRent;
    }
  }

  buyProperty() {
    this.currentPlayer.cash -= this.currentPlayerSite.price;
    this.currentPlayer.currentSite.owner = this.currentPlayer;
    this.changePlayer();
  }

  onRollDice(dicenum: number) {
    const dice = $('#dice' + dicenum);
    $('.wrap').append('<div id=\'dice_mask\'></div>'); // add mask
    dice.attr('class', 'dice'); // After clearing the last points animation
    dice.css('cursor', 'default');

    const num = Math.floor(Math.random() * 6 + 1);
    const self = this;

    dice.animate({left: '+2px'}, 100, function(){
      dice.addClass('dice_t');
    }).delay(200).animate({top: '-2px'}, 100, function(){
      dice.removeClass('dice_t').addClass('dice_s');
    }).delay(200).animate({opacity: 'show'}, 600, function(){
      dice.removeClass('dice_s').addClass('dice_e');
    }).delay(100).animate({left: '-2px', top: '2px'}, 100, function(){
      dice.removeClass('dice_e').addClass('dice_' + num);
      dice.css('cursor', 'pointer');
      $('#dice_mask').remove(); // remove mask
      if (dicenum === 1) {
        self.diceValue1 = num;
      } else {
        self.diceValue2 = num;
        self.rollDice();
      }

    });




  }

  rollDice() {
    this.movePlayer(this.diceValue1 + this.diceValue2);
    this.takeAction();
  }

  changePlayer() {

    if (this.playerTurn === this.players.length - 1) {
      this.playerTurn = 0;
    } else {
      this.playerTurn += 1;
    }

    this.currentAction = Action.RollDicePrompt;

  }

  get previousPlayer(): PlayerInfo {
    if (this.playerTurn === 0) {
      return this.players[this.players.length - 1];
    } else {
      return this.players[this.playerTurn - 1];
    }
  }

  get currentPlayer(): PlayerInfo {
    return this.players[this.playerTurn];
  }

  get currentPlayerSite(): Site {
    return this.currentPlayer.currentSite;
  }

  movePlayer(diceValue: number) {
     const loc = this.currentPlayerSite.loc;
     let newloc = loc + diceValue;

     if (newloc >= 40) {
        newloc -= 40;
        this.currentPlayer.cash += 5000;
     }
     this.currentPlayer.currentSite = this.allSites[newloc];
     this.allSites[loc].visitors = this.allSites[loc].visitors.filter(vis => vis.name !== this.currentPlayer.name);
     this.allSites[newloc].visitors.push(this.currentPlayer);
  }

}
