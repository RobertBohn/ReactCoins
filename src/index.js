
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Detail extends React.Component {
  changeView(view) {
    this.props.app.setState({id: this.props.app.state.id, view: view });
  }
  getCoin() {
    for (let i = 0; i < this.props.data.length; i++) {
      if (this.props.data[i].id === this.props.id) {
        return this.props.data[i];
      }
    }
    return null;
  }
  render(props) {
    var coin = this.getCoin();
    if (coin != null) {
      switch (this.props.app.state.view) {
        case 0:
          return (  
            <div id="basic">
              <img id="small_obv" alt="" src={coin.obverse} onClick={() => this.changeView(1)} />
              <img id="small_rev" alt="" src={coin.reverse} onClick={() => this.changeView(2)} />
              <h2 id="title">{coin.title}</h2>
              <p id="description">{coin.description}</p>
              <p id="notes">{coin.notes}</p>
              <a id="certified" onClick={() => this.changeView(3)}>{coin.certified}</a>
            </div>
          );
        case 1:
          return (
            <img id="small_obv" alt="" src={coin.obverse} onClick={() => this.changeView(0)} />
          );
        case 2:
          return (
            <img id="small_rev" alt="" src={coin.reverse} onClick={() => this.changeView(0)} />
          );
        case 3:
          return (
            <img id="obverse_slab" alt="" src={coin.slab_obverse} onClick={() => this.changeView(4)} />
          );
        case 4:
          return (
            <img id="reverse_slab" alt="" src={coin.slab_reverse} onClick={() => this.changeView(0)} />
          );
        default:
          return ("");
      }
    } else {
      return ("");
    }
  }
}

class MenuHeading extends React.Component {
  render(props) {
    return(
      <h1>{this.props.text}</h1>
    );
  }
}

class MenuItem extends React.Component {
  render(props) {
    return(
      <a onClick={() => this.props.app.setState({id: this.props.coin.id, view: 0})}>{this.props.coin.menu}</a>
    );
  }
}

class MenuSet extends React.Component {
  render(props) {
    return (
      this.props.data.map((coin, idx) => {
        if (this.props.data[idx].type === this.props.heading) {
          return (
            <li>
              <MenuItem coin={this.props.data[idx]} app={this.props.app} />
            </li>
          );
        } else {
          return("");
        }
      })
    );
  }
}

class Menu extends React.Component {
  render(props) {
    return (
      this.props.headings.map((heading) => {
        return (
          <div>
            <MenuHeading text={heading} />
            <ul>
              <MenuSet data={this.props.data} heading={heading} app={this.props.app} />
            </ul>
          </div>
        );
      })
    );
  }
}

class Application extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      view: 0
    };
  }
  render(props) {
    return (
      <div id="container2">
        <div id="content">
          <div id="container1">
            <div id="col1">
              <Menu data={this.props.data} headings={this.props.headings} app={this} />                             
            </div>
            <div id="col2">
              <Detail id={this.state.id} data={this.props.data} app={this} />              
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Application data={getData()} headings={getHeadings()} />,
  document.getElementById('root')
);

function getData() {
  return [
    {"id":"29","type":"World Coins","menu":"Belgium • Albert I • 20 Francs","title":"Belgium • Albert I • 20 Francs • 1914","description":"Belgium, Albert I, 20 Francs 1914 (Brussels) French Legend, KM78, AGW 0.1867.","notes":"Position A: coins with portrait side down having upright edge lettering. Position B: coins with portrait side up having upright edge lettering.","date":null,"denomination":null,"certified":null,"obverse":"resources/images/world/km78_obverse.png","reverse":"resources/images/world/km78_reverse.png","slab_obverse":null,"slab_reverse":null},
    {"id":"15","type":"World Coins","menu":"British India • East India Company","title":"British India • East India Company • 1 Mohur • 1841","description":"British India. East India Company. Victoria Gold Mohur 1841 (Calcutta), S&W-3.11. Type B/1. W.W. Crosslet 4. KM462.2, AGW 0.3437. AU Details (Removed From Jewelry) NGC.","notes":"The East India Company received a Royal Charter from Queen Elizabeth on 31 December 1600. By 1672 the Company had established mints to serve local needs. From 1835, the Company issued Uniform Coinage for all its Indian possessions. The attitude had changed from the adoption of local traditions to the imposition of Western ideas. This new coinage was minted on the English pattern, with the head of the ruler of England in place of the name of Mughal emperor and the inscription 'East India Company' on the reverse. The Government of India passed to the British Crown in 1858.","date":null,"denomination":null,"certified":"NGC 3813116-002","obverse":"resources/images/world/km462_obverse.png","reverse":"resources/images/world/km462_reverse.png","slab_obverse":"resources/images/world/km462_slab_obv.png","slab_reverse":"resources/images/world/km462_slab_rev.png"},
    {"id":"12","type":"World Coins","menu":"France • Napoleon I • 20 Francs","title":"France • Napoleon I • 20 Francs • AN 13-A","description":"France. Napoleon I. 20 Francs. AN 13-A (1805 Paris). KM663.1. AGW 0.1867, VF.","notes":"Minted during the First French Empire which began with the coronation of\n Napoleon I on 2 Dec 1804. AN 13 refers to the 13th year of the French \nRevolutionary Calendar (22 Sept 1804 - 21 Sept 1805). Mintage 519,000.","date":null,"denomination":null,"certified":null,"obverse":"resources/images/world/km663_obv.png","reverse":"resources/images/world/km663_rev.png","slab_obverse":null,"slab_reverse":null},
    {"id":"26","type":"World Coins","menu":"France • Republic • 100 Francs","title":"France • Modern Republic • 100 Francs • 1908","description":"France, Modern Republic, 1908-A Paris Mint, 100 Francs, KM858, AGW 0.9334","notes":"French Republic - Liberty Equality Fraternity. Mintage 20,000","date":null,"denomination":null,"certified":null,"obverse":"resources/images/world/km858_obverse.png","reverse":"resources/images/world/km858_reverse.png","slab_obverse":null,"slab_reverse":null},
    {"id":"30","type":"World Coins","menu":"France • Republic • 20 Francs","title":"France • Modern Republic • 20 Francs • 1908","description":"France, Modern Republic, 20 Francs 1908 (Paris) KM857, AGW 0.1867.","notes":"French Republic - Liberty Equality Fraternity. All dates from 1907-1914 have been officially restruck.","date":null,"denomination":null,"certified":null,"obverse":"resources/images/world/km857-obverse.png","reverse":"resources/images/world/km857-reverse.png","slab_obverse":null,"slab_reverse":null},
    {"id":"1","type":"World Coins","menu":"German States • Hamburg • 20 Mark","title":"German States • Hamburg • 1877 • 20 Mark","description":"German States: Free and Hanseatic City of Hamburg. 20 Mark 1877-J. Helmeted arms with lion supporters / Crowned imperial eagle, type II. KM602, AGW 0.2305, XF/AU.","notes":"Founded by Charlemagne in the 9th century, Hamburg was a free imperial city of the Holy Roman Empire. Although Hamburg became part of the German Empire in 1871, it continued its civic mint until the start of World War I.","date":null,"denomination":null,"certified":null,"obverse":"resources/images/world/km602_obverse.png","reverse":"resources/images/world/km602_reverse.png","slab_obverse":null,"slab_reverse":null},
    {"id":"20","type":"World Coins","menu":"German States • Prussia • 20 Mark","title":"German States • Prussia • Wilhelm II • 1914-A • 20 Mark","description":"German States: Prussia. Wilhelm II. 20 Mark 1914-A (Berlin). KM537, Military bust type. AGW 0.2305, MS64 NGC.","notes":"WILHELM II DEUTSCHER KAISER KONIG VON PREUSSEN • Wilhelm II German Emperor, King of Prussia • DEUTSCHES REICH • German Empire","date":null,"denomination":null,"certified":"NGC 3811521-002","obverse":"resources/images/world/km537_obverse.png","reverse":"resources/images/world/km537_reverse.png","slab_obverse":"resources/images/world/km537_slab_obv.png","slab_reverse":"resources/images/world/km537_slab_rev.png"},
    {"id":"2","type":"World Coins","menu":"Great Britain • Edward VII • 2 Pounds","title":"Great Britain • Edward VII • 2 Pounds • 1902","description":"Great Britain, Edward VII, 2 Pounds 1902 (London), KM806, AGW 0.4710, XF.","notes":"EDWARDVS VII DEI GRA: BRITT: OMN: REX FID: DEF: IND: IMP: translates as \"Edward VII by the Grace of God, King of all the Britains, Defender of the Faith, Emperor of India\". The 1902 gold two pound piece was issued  by the London Royal Mint in \ncommemoration of the coronation of Edward VII as King of the British \nEmpire. Mintage 46,000.","date":null,"denomination":null,"certified":null,"obverse":"resources/images/world/km806_obverse.png","reverse":"resources/images/world/km806_reverse.png","slab_obverse":null,"slab_reverse":null},
    {"id":"32","type":"World Coins","menu":"Great Britain • George V • Sovereign","title":"Great Britain • George V • Sovereign • 1914","description":"Great Britain, George V, Sovereign 1914 (London) KM820, AGW 0.2355.","notes":"GEORGIVS V D.G.BRITT.OMN.REX.F.D.IND.IMP: translates as \"George V by the Grace of God, King of all the Britains, Defender of the Faith, Emperor of India\".","date":null,"denomination":null,"certified":null,"obverse":"resources/images/world/km820-obverse.png","reverse":"resources/images/world/km820-reverse.png","slab_obverse":null,"slab_reverse":null},
    {"id":"13","type":"World Coins","menu":"Great Britain • Victoria • 5 Pounds","title":"Great Britain • Victoria • 5 Pounds • 1887","description":"Great Britain, Victoria, 5 Pounds 1887 (London), KM769, AGW 1.1775, MS62 NGC.","notes":"VICTORIA D:G: BRITT: REG: F:D: translates as \"Victoria by the Grace of God, Queen of Britain, Defender of the Faith\". The 1887 gold five pound piece was issued for the commemoration of Queen Victoria's Golden Jubilee, featuring the second major portrait of Queen Victoria by Joseph Edgar Boehm. Mintage 54,000.","date":null,"denomination":null,"certified":"NGC 3673029-007","obverse":"resources/images/world/km769_obverse.png","reverse":"resources/images/world/km769_reverse.png","slab_obverse":"resources/images/world/km769_slab_obv.png","slab_reverse":"resources/images/world/km769_slab_rev.png"},
    {"id":"8","type":"World Coins","menu":"Italy • Papal States • Pius IX • 20 Lire","title":"Italy • Papal States • 1866 • 20 Lire","description":"Italy: Papal States. Pius IX. 20 Lire 1866-R (Rome). Dated Anno XXI. KM1382.2, AGW 0.1867, AU.","notes":"Pope Pius IX was the last pope to rule as the Sovereign of the Papal States, which fell to the Italian army in 1870 and were incorporated into the Kingdom of Italy. AN XXI refers to the 21st year of his reign as Pope. Mintage 102,000.","date":null,"denomination":null,"certified":null,"obverse":"resources/images/world/km1382_obv.png","reverse":"resources/images/world/km1382_rev.png","slab_obverse":null,"slab_reverse":null},
    {"id":"11","type":"World Coins","menu":"Russia • Chervonetz • 10 Roubles","title":"Russia • Chervonetz • 10 Roubles • 1976","description":"USSR Chervonetz. 10 Roubles. 1976. KM-Y85, FR-181a. AGW 0.2489, UNC.","notes":"Chervonetz were struck in the old 1920s design before the 1980 Summer Olympics in Moscow. It was hoped Soviet Chervonetz would compete with the South African Kruggerand, the popular bullion coin of the time. 1976 - mintage 1,000,000.","date":null,"denomination":null,"certified":null,"obverse":"resources/images/world/kmy85_obv.png","reverse":"resources/images/world/kmy85_rev.png","slab_obverse":null,"slab_reverse":null},
    {"id":"10","type":"World Coins","menu":"Russia • Nicholas II • 15 Roubles","title":"Russia • Nicholas II • 15 Roubles • 1897","description":"Russia: Nicholas II. 15 Roubles 1897-Г (St. Petersburg). Wide Rim. KM-Y65.1, AGW 0.3734, VF/XF.","notes":"In 1897 Minister of Finance Sergius Witte completed a series of Russian financial reforms culminating in the restoration of the gold standard. The 15 rouble gold piece was only issued in that year. Minted in St. Petersburg. 11,900,000 were produced. Obverse legend reads, “By God’s Will, Nicholas II, Emperor and Autocrat of All Russia.”","date":null,"denomination":null,"certified":null,"obverse":"resources/images/world/kmy65_obv.png","reverse":"resources/images/world/kmy65_rev.png","slab_obverse":null,"slab_reverse":null},
    {"id":"19","type":"World Coins","menu":"South Africa • Kruger • 1 Pond","title":"South Africa • Kruger • 1 Pond • 1894","description":"South Africa, President Kruger, 1 Pond 1894, KM10.2, AGW 0.2352, VF20 NGC.","notes":"ZUID AFRIKAANSCHE REPUBLIEK • South African Republic • EENDRAGT MAAKT MAGT • Unity Makes Strength. Mintage 318,000.","date":null,"denomination":null,"certified":"NGC 3811890-019","obverse":"resources/images/world/km10_obverse.png","reverse":"resources/images/world/km10_reverse.png","slab_obverse":"resources/images/world/km10_slab_obv.png","slab_reverse":"resources/images/world/km10_slab_rev.png"},
    {"id":"18","type":"World Coins","menu":"Spain • Charles IV • 4 Escudos","title":"Spain • Charles IV • 4 Escudos • 1791 M-MF","description":"Spain, Charles IV, 4 Escudos 1791 M-MF (Madrid), KM436.1, AGW 0.3809, AU58 NGC.","notes":"CAROL • IIII • D • G • HISP • ET IND • R • translates as Charles IV by the Grace of God, King of Spain and the Indies. IN • UTROQ • FELIX • AUSPICE • DEO • translates as Under the fortunate guidance of God.","date":null,"denomination":null,"certified":"NGC 3813122-001","obverse":"resources/images/world/km436_obverse.png","reverse":"resources/images/world/km436_reverse.png","slab_obverse":"resources/images/world/km436_slab_obv.png","slab_reverse":"resources/images/world/km436_slab_rev.png"},
    {"id":"31","type":"World Coins","menu":"Switzerland • 20 Francs","title":"Switzerland • 20 Francs • 1914-B","description":"Switzerland, 20 Francs 1914-B (Bern Mint) KM35.1, AGW 0.1867.","notes":"HELVETIA: An ancient region of central Europe between the Alps and the Jura Mountains. It was named by the Romans for its predominantly Celtic inhabitants, the Helvetii. Helvetia corresponded roughly to the western part of modern Switzerland, and the name is still used on Swiss currency and postage stamps.","date":null,"denomination":null,"certified":null,"obverse":"resources/images/world/km35-1-obverse.png","reverse":"resources/images/world/km35-1-reverse.png","slab_obverse":null,"slab_reverse":null},
    {"id":"27","type":"US Coins","menu":"$5 Classic Head Half Eagle","title":"1836 Classic Head Half Eagle","description":"1836 Classic Head Half Eagle. Philadelphia Mint (NGC ID# 25RY, PCGS# 8174, KM#57) AGW 0.2416. Mintage 553,147","notes":null,"date":1836,"denomination":5.0,"certified":null,"obverse":"resources/images/us/km57_obverse.png","reverse":"resources/images/us/km57_reverse.png","slab_obverse":null,"slab_reverse":null},
    {"id":"34","type":"US Coins","menu":"$5 Coronet Head Half Eagle","title":"1881 Coronet Head Half Eagle","description":"1881 Coronet Head • With Motto • Half Eagle. Philadelphia Mint (NGC ID# 25XD, PCGS# 8354, KM#101) AGW 0.2419","notes":null,"date":1881,"denomination":5.0,"certified":null,"obverse":"resources/images/us/1881_5dollar_obv.png","reverse":"resources/images/us/1881_5dollar_rev.png","slab_obverse":null,"slab_reverse":null},
    {"id":"28","type":"US Coins","menu":"$5 Indian Head Half Eagle","title":"1908 Indian Head Half Eagle","description":"1908 Indian Head Half Eagle. Philadelphia Mint. AGW 0.2419 (NGC ID# 28DE, PCGS# 8509, KM#129) Mintage 577,845.","notes":null,"date":1908,"denomination":5.0,"certified":null,"obverse":"resources/images/us/1908_5dollar_obv.png","reverse":"resources/images/us/1908_5dollar_rev.png","slab_obverse":null,"slab_reverse":null},
    {"id":"35","type":"US Coins","menu":"$10 Coronet Head Eagle","title":"1893 Coronet Head Eagle","description":"1893 Coronet Head • New-Style Head • With Motto • Eagle. Philadelphia Mint (NGC ID# 266Z, PCGS# 8725, KM#102) AGW 0.4837","notes":null,"date":1893,"denomination":10.0,"certified":null,"obverse":"resources/images/us/1893_10dollar_obv.png","reverse":"resources/images/us/1893_10dollar_rev.png","slab_obverse":null,"slab_reverse":null},
    {"id":"16","type":"US Coins","menu":"$10 Indian Head Eagle","title":"1932 Indian Head Eagle","description":"1932 Indian Head Eagle. Philadelphia Mint (NGC ID# 28HB, PCGS# 8884, KM#130) AGW 0.4837, MS64+ NGC. CAC.","notes":null,"date":1932,"denomination":10.0,"certified":"NGC 3601343-004","obverse":"resources/images/us/1932_20dollar_obv.png","reverse":"resources/images/us/1932_20dollar_rev.png","slab_obverse":"resources/images/us/1932_20dollar_slab_obv.png","slab_reverse":"resources/images/us/1932_20dollar_slab_rev.png"},
    {"id":"36","type":"US Coins","menu":"$10 American Eagle","title":"1998 American Eagle","description":"1998 American Eagle. Philadelphia Mint (NGC ID# 26ME, PCGS# 9933, KM#217) AGW 0.25","notes":null,"date":1998,"denomination":10.0,"certified":null,"obverse":"resources/images/us/1998_10dollar_obv.png","reverse":"resources/images/us/1998_10dollar_rev.png","slab_obverse":null,"slab_reverse":null},
    {"id":"7","type":"US Coins","menu":"$20 Saint Gaudens Double Eagle","title":"1914-D Saint Gaudens Double Eagle","description":"1914-D Saint Gaudens Double Eagle. AGW 0.9675 (NGC ID# 26G7, KM#131)","notes":null,"date":1914,"denomination":20.0,"certified":null,"obverse":"resources/images/us/1914_20dollar_obv.png","reverse":"resources/images/us/1914_20dollar_rev.png","slab_obverse":null,"slab_reverse":null},
    {"id":"24","type":"Ancients","menu":"Pergamene Kingdom • Eumenes I","title":"Pergamene Kingdom • Eumenes I (263-241 BC)","description":"AR tetradrachm (16.68 gm). Pergamum, 263-255 BC. Laureate head of Philetairus right / ΦIΛETAIPOY, Athena seated left, holding large grounded shield before her by upper rim and resting elbow on small sphinx facing to back and holding spear, ivy leaf on stem above legs, strung bow in right field, monogram on seat. SNG France 1606-1609. Toned with light iridescence. Unobtrusive flan flaw affecting cheek of portrait. Good VF.","notes":null,"date":null,"denomination":null,"certified":null,"obverse":"resources/images/ancient/sng1606_obverse.png","reverse":"resources/images/ancient/sng1606_reverse.png","slab_obverse":null,"slab_reverse":null},
    {"id":"4","type":"Ancients","menu":"Seleucid Kingdom • Seleucus I Nicator","title":"Seleucid Kingdom • Seleucus I Nicator (312-281 BC)","description":"AR tetradrachm (17.08 gm). Seleuceia in Pieria, ca. 300-290 BC. Head of Herakles right wearing lion skin headdress / BAΣIΛEΩΣ ΣEΛEYKOY Zeus enthroned left, holding Nike bearing wreath and scepter, monogram in left field and KP under throne. WSM 890. SC 29.1b. Toned Very Fine.","notes":"Antigonus Monophthalmus founded what he intended should become his empire's capital, Antigonea on the Orontes in 306 BC. A mint was established which produced Antigonid coins in the traditional Alexander style. After the battle of Ipsus and the death of Antigonus in 301 BC, Seleucus founded the city of Antioch and its accompanying port city, Seleucia Pieria. The mint of Antigonea was moved to Seleucia along with its personnel and equipment. This historically important issue, minted around 300 BC, is the earliest known type produced for Seleucus in Seleucia, and created by the same individual artist who cut the dies for the last coin of the Antigonid empire.","date":null,"denomination":null,"certified":null,"obverse":"resources/images/ancient/wsm890_obverse.png","reverse":"resources/images/ancient/wsm890_reverse.png","slab_obverse":null,"slab_reverse":null},
    {"id":"23","type":"Ancients","menu":"Thracian Kingdom • Lysimachus","title":"Thracian Kingdom • Lysimachus (305-281 BC)","description":"AR tetradrachm (30mm, 16.85 gm, 12h) Lampsacus. ca. 297-281 BC. Diademed head of the deified Alexander right, with horn of Ammon / BAΣIΛEΩΣ ΛYΣIMAXOY, Athena seated left, left arm resting on shield, spear behind, holding Nike; monogram to inner left; crescent in exergue. Thompson 49. Müller 399. Lightly toned. Nearly Extremely Fine.","notes":null,"date":null,"denomination":null,"certified":null,"obverse":"resources/images/ancient/thompson49_obverse.png","reverse":"resources/images/ancient/thompson49_reverse.png","slab_obverse":null,"slab_reverse":null}
  ];
}

function getHeadings() {
  return  [ "World Coins", "US Coins", "Ancients" ];
}
