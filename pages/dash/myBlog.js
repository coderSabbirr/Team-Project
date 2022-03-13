import React from 'react'
import List from '../../Components/List'

const myBlog = () => {
  const rows = [
    {
      id: 1143155,
      title: " Ideas to Help You Sell More Prints by Cheryl Dell'Osso",
      img: "https://www.skipcohenuniversity.com/uploads/2/5/2/3/25238905/editor/screen-shot-2022-02-28-at-10-34-09-am.png?1646062532",
      date: "1 March",
    },
    {
      id: 2235235,
      title: "A Twenty Year Throwback in Photography and WPPI?",
      img: "https://www.skipcohenuniversity.com/uploads/2/5/2/3/25238905/published/screen-shot-2022-02-23-at-7-50-19-pm.png?1645665356",
      date: "1 March",
    },
    {
      id: 2342353,
      title: "What’s Missing From Your Photography?",
      img: "https://d3c0aoh0dus5lw.cloudfront.net/WP/wp-content/uploads/2022/02/20220115-duChemin-Maasai-Mara-1362-864x576.jpg",
      date: "1 March",
     
    },
    {
      id: 2357741,
      title: "Your Best Shot Isn’t (Usually) Your Only Shot",
      img: "https://d3c0aoh0dus5lw.cloudfront.net/WP/wp-content/uploads/2022/02/20220203-duChemin-Sarara-392-864x576.jpg",
   
      date: "1 March",
     
    },
    {
      id: 2342355,
      title: "What Lens Should I Bring? ",
      img: "https://d3c0aoh0dus5lw.cloudfront.net/WP/wp-content/uploads/2022/01/20220121-untitled-2045-2-864x576.jpg",
      date: "1 March",
    },
  ];
  return (
    <div>
      <List
      type="blog"
      rows={rows}
      />
    </div>
  )
}

export default myBlog