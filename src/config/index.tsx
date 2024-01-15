export const PRODUCT_CATEGORIES=[
  {
    label:'UI Kits',
    value:'ui-kits' as const,
    featured:[
      {
        name:'Editor picks',
        href:'#',
        imageSrc:'/public/ui/mixed.jpg',
      },
      {
        name:'New Arrivals',
        href:'#',
        imageSrc:'/public/ui/blue.jpg',
      },
      {
        name:'Popular',
        href:'#',
        imageSrc:'/public/ui/purple.jpg',
      }

    ]
  },
  {
    label:'Icons',
    value:'Icons' as const,
    featured:[
      {
        name:'Supervised Collection',
        href:'#',
        imageSrc:'/public/icons/bestsellers.jpg',
      },
      {
        name:'Actors Pick',
        href:'#',
        imageSrc:'/public/icons/new.jpg',
      },
      {
        name:'Popular',
        href:'#',
        imageSrc:'/public/icons/picks.jpg',
      }

    ]
  }
]