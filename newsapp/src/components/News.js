import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  articles=[
    {
    "source": {
    "id": null,
    "name": "The Guardian"
    },
    "author": "https://www.theguardian.com/profile/samantha-lock",
    "title": "Russia-Ukraine war live news: drone strike on Kyiv; UK to announce new artillery package - The Guardian",
    "description": "Nine Iranian-made drones shot down in capital, say officials; Rishi Sunak to unveil £250m in military support during leaders’ meeting in Latvia",
    "url": "https://www.theguardian.com/world/live/2022/dec/19/russia-ukraine-war-live-news-drone-strike-on-kyiv-uk-to-announce-new-artillery-package",
    "urlToImage": "https://i.guim.co.uk/img/media/2e4b6f164e0ad65705b84c64e1247dad51ddbc19/0_0_4300_2580/master/4300.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=f4f9564aca63c388f4a58551e4bab341",
    "publishedAt": "2022-12-19T05:30:00Z",
    "content": "Show key events onlyPlease turn on JavaScript to use this feature\r\nUkraines air force says it shot down 30 out of 35 Russian-launched Shahed drones overnight.\r\nThe Iranian-made Shahed-136/131 kamikaz… [+13407 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "CBS Sports"
    },
    "author": "",
    "title": "NFL Week 15 grades: Patriots get a 'D' for shocking loss to Raiders; Cowboys earn a 'C' for surprising setback - CBS Sports",
    "description": "Here are the Week 15 grades for every team that played Sunday",
    "url": "https://www.cbssports.com/nfl/news/nfl-week-15-grades-cowboys-get-c-for-stunning-loss-to-jaguars-chiefs-earn-c-for-surviving-lowly-texans/",
    "urlToImage": "https://sportshub.cbsistatic.com/i/r/2022/12/18/17a61a76-7a64-4b56-8ad8-8f4341f2a056/thumbnail/1200x675/5433f2fd0933bca95981d873e92f946d/dak-jags-us.jpg",
    "publishedAt": "2022-12-19T04:50:00Z",
    "content": "After a wild Saturday that gave us the biggest comeback win in NFL history, the action on Sunday might have actually topped that. \r\nIn Las Vegas, the Raiders beat the Patriots with one of the wildest… [+3012 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "YouTube"
    },
    "author": null,
    "title": "New York Giants vs. Washington Commanders | 2022 Week 15 Game Highlights - NFL",
    "description": "Check out our other channels:NFL Mundo https://www.youtube.com/mundonflNFL Brasil https://www.youtube.com/c/NFLBrasilOficialNFL UK https://www.youtube.com/ch...",
    "url": "https://www.youtube.com/watch?v=aYQtFvrZJRY",
    "urlToImage": "https://i.ytimg.com/vi/aYQtFvrZJRY/maxresdefault.jpg",
    "publishedAt": "2022-12-19T04:40:51Z",
    "content": null
    },
    {
    "source": {
    "id": null,
    "name": "PEOPLE"
    },
    "author": "https://www.facebook.com/peoplemag",
    "title": "Sister Wives ' Christine Brown Found It 'Super Embarrassing' Kody Wasn't Attracted to Her: 'Goes Both Ways' - Yahoo Entertainment",
    "description": "After Sister Wives' Christine Brown learned her now-ex-husband Kody Brown was no longer attracted to her, 'I was kind of like, 'Oh, well then I'm done. It's over.' It was almost a relief. I'm not going to keep fighting for this or trying'",
    "url": "https://people.com/tv/sister-wives-christine-brown-says-it-was-super-embarrassing-to-hear-kody-wasnt-attracted-to-her/",
    "urlToImage": "https://people.com/thmb/7Xv8fJwQFufiyweavuC8bmw2Pk4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(569x369:571x371)/kody-brown-christine-brown-sister-wives-091422-5bd9f20bb15b43d88af53ea445de2a68.jpg",
    "publishedAt": "2022-12-19T04:02:00Z",
    "content": "Sister Wives' Christine Brown is opening up about the pain she felt after hearing harsh words from her former husbandKody Brown.\r\nOn Sunday's Sister Wives: One on One episode, Christine discussed her… [+2897 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "YouTube"
    },
    "author": null,
    "title": "Argentina vs. France: MINI-MOVIE of 2022 FIFA World Cup final | FOX Soccer - FOX Soccer",
    "description": "Relive some of the best moments from one of the greatest matches in World Cup history. Lionel Messi and Kylian Mbappé star in this dramatic recap of a match ...",
    "url": "https://www.youtube.com/watch?v=2iaE0xHfUro",
    "urlToImage": "https://i.ytimg.com/vi/2iaE0xHfUro/maxresdefault.jpg",
    "publishedAt": "2022-12-19T03:30:07Z",
    "content": null
    },
    {
    "source": {
    "id": null,
    "name": "YouTube"
    },
    "author": null,
    "title": "Severe turbulence: Passengers, attendants injured on rough flight to Hawaii - ABC7",
    "description": "At least 36 people on a Hawaiian Airlines flight were injured, with 20 taken to emergency rooms, after their plane encountered \"severe turbulence\" on a fligh...",
    "url": "https://www.youtube.com/watch?v=ZpiITOzMpkU",
    "urlToImage": "https://i.ytimg.com/vi/ZpiITOzMpkU/maxresdefault.jpg",
    "publishedAt": "2022-12-19T03:26:58Z",
    "content": null
    },
    {
    "source": {
    "id": "google-news",
    "name": "Google News"
    },
    "author": null,
    "title": "Elon Musk polls users about stepping down as head of Twitter - The Hill",
    "description": "Twitter owner Elon Musk posted a poll on Sunday asking users whether he should step down as the head of Twitter amid a slew of controversies surrounding the popular social media platform. ",
    "url": "https://news.google.com/__i/rss/rd/articles/CBMia2h0dHBzOi8vdGhlaGlsbC5jb20vcG9saWN5L3RlY2hub2xvZ3kvMzc4MDE3My1lbG9uLW11c2stcG9sbHMtdXNlcnMtYWJvdXQtc3RlcHBpbmctZG93bi1hcy1oZWFkLW9mLXR3aXR0ZXIv0gFvaHR0cHM6Ly90aGVoaWxsLmNvbS9wb2xpY3kvdGVjaG5vbG9neS8zNzgwMTczLWVsb24tbXVzay1wb2xscy11c2Vycy1hYm91dC1zdGVwcGluZy1kb3duLWFzLWhlYWQtb2YtdHdpdHRlci9hbXAv?oc=5",
    "urlToImage": null,
    "publishedAt": "2022-12-19T01:30:00Z",
    "content": null
    },
    {
    "source": {
    "id": null,
    "name": "Variety"
    },
    "author": "Katie Reul",
    "title": "‘Oppenheimer’ Trailer Unveils Christopher Nolan’s Atomic Bomb Thriller - Variety",
    "description": "The trailer for Christopher Nolan’s latest film, “Oppenheimer” has been released by Universal Pictures. “Oppenheimer” documents the life and ethically questionable acc…",
    "url": "https://variety.com/2022/film/trailers/oppenheimer-trailer-christopher-nolan-new-movie-1235436149/",
    "urlToImage": "https://variety.com/wp-content/uploads/2022/12/oppenheimer-trailer.jpg?w=1000&h=562&crop=1",
    "publishedAt": "2022-12-19T01:14:00Z",
    "content": "The trailer for Christopher Nolan’s latest film, “Oppenheimer” has been released by Universal Pictures.\r\n“Oppenheimer” documents the life and ethically questionable accolades of physicist J. Robert O… [+1736 chars]"
    },
    {
    "source": {
    "id": "google-news",
    "name": "Google News"
    },
    "author": null,
    "title": "Snow showers arrive in Seattle area as holidays begin - The Seattle Times",
    "description": "Snow and rain returned to the Seattle area Sunday as a cold front moved into the region from the north.The wintry week ahead made its first appearance Sunday, as steady moisture moved south from Snohomish County into North King County as Hanukkah, the Jewish Festival of Lights, started in the evening.",
    "url": "https://news.google.com/__i/rss/rd/articles/CBMiaGh0dHBzOi8vd3d3LnNlYXR0bGV0aW1lcy5jb20vc2VhdHRsZS1uZXdzL3dlYXRoZXIvc25vdy1zaG93ZXJzLWFycml2ZS1pbi1zZWF0dGxlLWFyZWEtYXMtaG9saWRheXMtYmVnaW4v0gFuaHR0cHM6Ly93d3cuc2VhdHRsZXRpbWVzLmNvbS9zZWF0dGxlLW5ld3Mvd2VhdGhlci9zbm93LXNob3dlcnMtYXJyaXZlLWluLXNlYXR0bGUtYXJlYS1hcy1ob2xpZGF5cy1iZWdpbi8_YW1wPTE?oc=5",
    "urlToImage": null,
    "publishedAt": "2022-12-19T01:11:29Z",
    "content": null
    },
    {
    "source": {
    "id": "cnn",
    "name": "CNN"
    },
    "author": "Brian Fung",
    "title": "Elon Musk says Twitter will ban some links to other social media sites, sparking backlash - CNN",
    "description": "Twitter said Sunday it would ban links to other social media services and suspend accounts that try to direct users to alternative platforms, in an apparent attempt to stem user defections to competitors.",
    "url": "https://www.cnn.com/2022/12/18/tech/twitter-ban-social-media-links/index.html",
    "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/221218144215-twitter-san-fran-hq-file-120822.jpg?c=16x9&q=w_800,c_fill",
    "publishedAt": "2022-12-19T01:11:00Z",
    "content": "Twitter said Sunday it would ban links to other social media services and suspend accounts that try to direct users to alternative platforms, in an apparent attempt to stem user defections to competi… [+4512 chars]"
    },
    {
    "source": {
    "id": "cnn",
    "name": "CNN"
    },
    "author": "Oscar Holland, CNN",
    "title": "'How to make applesauce': A photograph that made time stand still - CNN",
    "description": "Harold Edgerton's image of a bullet passing through an apple was not only a work of art but a feat of electrical engineering that changed photography forever.",
    "url": "https://www.cnn.com/style/article/harold-edgerton-bullet-apple-snap/index.html",
    "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220727122753-harold-edgerton-snap-super-tease.jpg",
    "publishedAt": "2022-12-19T01:03:59Z",
    "content": "artsPublished 19th December 2022\r\nIn Snap, we look at the power of a single photograph, chronicling stories about how both modern and historical images have been made.\r\nExploding with energy but perf… [+4471 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Yahoo Entertainment"
    },
    "author": "Ashley Joy Parker",
    "title": "Alex Rodriguez Makes Romance With Jac Cordeiro Instagram Official - Yahoo Entertainment",
    "description": "Marking his first public relationship since his split from Jennifer Lopez in 2021, Alex Rodriguez shared a photo of his new girlfriend Jac Cordeiro on...",
    "url": "https://www.yahoo.com/entertainment/alex-rodriguez-makes-romance-jac-005940574.html",
    "urlToImage": "https://media.zenfs.com/en/e__181/984c38a76f08ca76a2bae3570a65b923",
    "publishedAt": "2022-12-19T00:59:00Z",
    "content": "Next up to bat.....\r\nAlex Rodriguezhas officially revealed his relationship with new girlfriend Jac Cordeiro. The couple made their romance Instagram official on Dec. 18 when the former MLB star post… [+1990 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "CNBC"
    },
    "author": "Jihye Lee",
    "title": "Asia-Pacific markets fall as recession fears grow, China vows to stabilize economy - CNBC",
    "description": "Asia-Pacific markets traded lower as recession fears grow. Chinese officials vowed to stabilize its economy in 2023 and maintain ample liquidity in financial markets in order to meet key targets",
    "url": "https://www.cnbc.com/2022/12/19/asia-pacific-markets-trade-lower-as-recession-fears-grow.html",
    "urlToImage": "https://image.cnbcfm.com/api/v1/image/107168078-1671409534460-gettyimages-1245629733-German_Christmas_Market_Held_In_Shanghai.jpeg?v=1671409623&w=1920&h=1080",
    "publishedAt": "2022-12-19T00:05:27Z",
    "content": "San Francisco Federal Reserve President Mary Daly said Friday she sees the recent inflation news as welcome, but it's not enough to change her view on where policy needs to go.\r\nThe October and Novem… [+866 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "YouTube"
    },
    "author": null,
    "title": "A blast of frigid Arctic air will arrive in New Orleans before Christmas - WWLTV",
    "description": "Meteorologist Alexandra Cranford says an Arctic blast is in the New Orleans Weather forecast at 5:30 p.m. Sunday, December 18, 2022.This week starts cold and...",
    "url": "https://www.youtube.com/watch?v=Ktwv37_vhMI",
    "urlToImage": "https://i.ytimg.com/vi/Ktwv37_vhMI/maxresdefault.jpg",
    "publishedAt": "2022-12-18T23:56:03Z",
    "content": null
    },
    {
    "source": {
    "id": null,
    "name": "CNET"
    },
    "author": "Sean Keane",
    "title": "'Avatar: The Way of Water': Is There a Post-Credits Scene? - CNET",
    "description": "Will sitting through the credits offer a hint about the third movie in James Cameron's epic sci-fi series?",
    "url": "https://www.cnet.com/culture/entertainment/avatar-the-way-of-water-is-there-a-post-credits-scene/",
    "urlToImage": "https://www.cnet.com/a/img/resize/8d8c4655331f348dc6583069c3d0cbf78d349d99/hub/2022/12/15/a270c3b5-819f-443c-a399-d2b2c0b67047/2040a-0180-v0492-1100-alteredv2-8192x4320-068a4ee.jpg?auto=webp&fit=crop&height=630&width=1200",
    "publishedAt": "2022-12-18T23:00:03Z",
    "content": "The long-awaited Avatar: The Way of Water landed in theaters Friday, giving us a fresh visual treat from legendary director James Cameron. The sequel continues the epic tale started by the 2009 origi… [+957 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Prideofdetroit.com"
    },
    "author": "Erik Schlitt",
    "title": "4 game ball candidates for the Lions Week 15 win over the Jets - Pride Of Detroit",
    "description": "Identifying the top candidates for the Detroit Lions game ball vs. the New York Jets in Week 15.",
    "url": "https://www.prideofdetroit.com/2022/12/18/23515271/4-game-ball-candidates-for-the-lions-week-15-win-over-the-jets",
    "urlToImage": "https://cdn.vox-cdn.com/thumbor/H9jE3XSTscqnR9Hued3APwK4th4=/0x204:3000x1775/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24300950/usa_today_19647966.jpg",
    "publishedAt": "2022-12-18T23:00:00Z",
    "content": "The Detroit Lions have now won six of their last seven games, are an even 7-7 on the season, and are firmly in the hunt for a chance at the playoffs.\r\nThis was easily the ugliest win of the Lions rec… [+4271 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Space.com"
    },
    "author": "Tariq Malik",
    "title": "Watch Rocket Lab attempt its 1st US launch with an Electron booster today - Space.com",
    "description": "Liftoff of the Rocket Lab Electron is scheduled for 6 p.m. EST (2300 GMT), but it could fly anytime between then and 8 p.m. EST (0100 GMT).",
    "url": "https://www.space.com/rocket-lab-1st-us-electron-launch-livestream",
    "urlToImage": "https://cdn.mos.cms.futurecdn.net/eRT98ikRSLLLcRhSyJwFR4-1200-80.jpg",
    "publishedAt": "2022-12-18T22:59:31Z",
    "content": "Update for 7:58 pm ET: Rocket Lab has called off tonight's Electron launch attempt from NASA's Wallops Flight Facility in Virginia due to high upper-level winds. The next launch attempt will be on Mo… [+5786 chars]"
    },
    {
    "source": {
    "id": "reuters",
    "name": "Reuters"
    },
    "author": null,
    "title": "Vatican dismisses Trump-supporting, anti-abortion leader from priesthood - Reuters",
    "description": "Father Frank Pavone, a leader of the U.S. anti-abortion movement and a strong supporter of former president Donald Trump, has been dismissed from the Catholic priesthood for \"blasphemous\" social media posts and disobedience to bishops.",
    "url": "https://www.reuters.com/world/us/vatican-dismisses-trump-supporting-anti-abortion-leader-priesthood-2022-12-18/",
    "urlToImage": "https://www.reuters.com/resizer/_avtsv56YmVdpbdS2gsrN6zGlYE=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/IDYUJVTJHZKFXND6VCOPCUBMKM.jpg",
    "publishedAt": "2022-12-18T22:55:00Z",
    "content": "VATICAN CITY, Dec 18 (Reuters) - Father Frank Pavone, a leader of the U.S. anti-abortion movement and a strong supporter of former president Donald Trump, has been dismissed from the Catholic priesth… [+2114 chars]"
    },
    {
    "source": {
    "id": "the-washington-post",
    "name": "The Washington Post"
    },
    "author": "Sammy Westfall",
    "title": "China's covid surge could cause at least 1 million deaths - The Washington Post",
    "description": "As China loosens its covid restrictions, researchers warn that a surge in new cases could bring a million or more deaths.",
    "url": "https://www.washingtonpost.com/world/2022/12/18/china-covid-model-deaths/",
    "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/ZKQVLMBSU55T2EBQMD3Q45XFCM.JPG&w=1440",
    "publishedAt": "2022-12-18T22:45:00Z",
    "content": "Comment on this story\r\nA fast-spreading covid-19 outbreak in China has researchers predicting a surge in virus-related deaths next year, with several analyses forecasting more than 1 million fataliti… [+5917 chars]"
    },
    {
    "source": {
    "id": "google-news",
    "name": "Google News"
    },
    "author": null,
    "title": "Tucker Carlson on 2024 presidential race: ‘I’m not endorsing anybody’ - The Hill",
    "description": "Fox News host Tucker Carlson lauded both Florida Gov. Ron DeSantis and former President Trump during a speech on Saturday, but he declined to endorse a candidate for the 2024 Republican presidential primary.",
    "url": "https://news.google.com/__i/rss/rd/articles/CBMibWh0dHBzOi8vdGhlaGlsbC5jb20vaG9tZW5ld3MvbWVkaWEvMzc4MDAzNS10dWNrZXItY2FybHNvbi1vbi0yMDI0LXByZXNpZGVudGlhbC1yYWNlLWltLW5vdC1lbmRvcnNpbmctYW55Ym9keS_SAXFodHRwczovL3RoZWhpbGwuY29tL2hvbWVuZXdzL21lZGlhLzM3ODAwMzUtdHVja2VyLWNhcmxzb24tb24tMjAyNC1wcmVzaWRlbnRpYWwtcmFjZS1pbS1ub3QtZW5kb3JzaW5nLWFueWJvZHkvYW1wLw?oc=5",
    "urlToImage": null,
    "publishedAt": "2022-12-18T22:23:00Z",
    "content": null
    }
    ]
  constructor(){
    super();
   this.state={
    articles: this.articles,
    loading:false
   } 
  }
  render() {
    return (
      <div className='container my-3'>
        <h2>NewsMonkey Top headlines</h2>
        <div className="row">
        {this.state.articles.map((element)=>{

         return   <div className="col-md-4" key={element.url}>
              <NewsItem title={element.title.slice(0,45)} description={element.description.slice(0,80)} imgUrl={element.urlToImage} newsUrl={element.url}/>
            </div>
        })}
        </div>
      </div>
    )
  }
}

export default News