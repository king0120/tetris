//@codekit-prepend 'rectangle.js';

// var iBlock = [new Rect(new Rectangle(positionX * (counter / 10), positionY));
var positionX = window.innerWidth;

//0
var tBlock = {
  'name' : 'tBlock',
  'color' : '#9013FE',
  'number' : 1000,
  "shape" : [[new Rectangle(positionX*0.4, tHeight, "#9013FE"),  //upside down T
             new Rectangle(positionX*0.3, tHeight*2, "#9013FE"),
             new Rectangle(positionX*0.4, tHeight*2, "#9013FE"),
             new Rectangle(positionX*0.5, tHeight*2, "#9013FE")],

             // [new Rectangle(positionX*0.5, tHeight*2, "#9013FE"), // left T
             // new Rectangle(positionX*0.4, tHeight, "#9013FE"),
             // new Rectangle(positionX*0.4, tHeight*2, "#9013FE"),
             // new Rectangle(positionX*0.4, tHeight*3, "#9013FE")],

             // [new Rectangle(positionX*0.4, tHeight*3, "#9013FE"), // right side up T
             // new Rectangle(positionX*0.5, tHeight*2, "#9013FE"),
             // new Rectangle(positionX*0.4, tHeight*2, "#9013FE"),
             // new Rectangle(positionX*0.3, tHeight*2, "#9013FE")],

             // [new Rectangle(positionX*0.3, tHeight*2, "#9013FE"), // right T
             // new Rectangle(positionX*0.4, tHeight*3, "#9013FE"),
             // new Rectangle(positionX*0.4, tHeight*2, "#9013FE"),
             // new Rectangle(positionX*0.4, tHeight, "#9013FE")]
             ],
};

//1
var jBlock = {
  'name': 'jBlock',
  'color' : '#4A6EE2',
  'number' : 1000,
  "shape" : [[new Rectangle(positionX*0.3, tHeight, '#4A6EE2'),
             new Rectangle(positionX*0.3, tHeight*2, '#4A6EE2'),
             new Rectangle(positionX*0.4, tHeight*2, '#4A6EE2'),
             new Rectangle(positionX*0.5, tHeight*2, '#4A6EE2')],

             // [new Rectangle(positionX*0.5, tHeight, '#4A6EE2'),
             // new Rectangle(positionX*0.4, tHeight*1, '#4A6EE2'),
             // new Rectangle(positionX*0.4, tHeight*2, '#4A6EE2'),
             // new Rectangle(positionX*0.4, tHeight*3, '#4A6EE2')],

             // [new Rectangle(positionX*0.5, tHeight*3, '#4A6EE2'),
             // new Rectangle(positionX*0.3, tHeight*2, '#4A6EE2'),
             // new Rectangle(positionX*0.4, tHeight*2, '#4A6EE2'),
             // new Rectangle(positionX*0.5, tHeight*2, '#4A6EE2')],

             // [new Rectangle(positionX*0.4, tHeight, '#4A6EE2'),
             // new Rectangle(positionX*0.4, tHeight*2, '#4A6EE2'),
             // new Rectangle(positionX*0.4, tHeight*3, '#4A6EE2'),
             // new Rectangle(positionX*0.3, tHeight*3, '#4A6EE2')]
             ]

};

//2
var sBlock = {
  'name' : 'sBlock',
  'color' : '#7ED321',
  'number' : 1000,
  "shape" : [[new Rectangle(positionX*0.3, tHeight*2, '#7ED321'),
             new Rectangle(positionX*0.4, tHeight*2, '#7ED321'),
             new Rectangle(positionX*0.4, tHeight, '#7ED321'),
             new Rectangle(positionX*0.5, tHeight*1, '#7ED321')],

             // [new Rectangle(positionX*0.4, tHeight, '#7ED321'),
             // new Rectangle(positionX*0.4, tHeight*2, '#7ED321'),
             // new Rectangle(positionX*0.5, tHeight*2, '#7ED321'),
             // new Rectangle(positionX*0.5, tHeight*3, '#7ED321')],

             // [new Rectangle(positionX*0.3, tHeight*2, '#7ED321'),
             // new Rectangle(positionX*0.4, tHeight*2, '#7ED321'),
             // new Rectangle(positionX*0.4, tHeight, '#7ED321'),
             // new Rectangle(positionX*0.5, tHeight*1, '#7ED321')],

             // [new Rectangle(positionX*0.4, tHeight, '#7ED321'),
             // new Rectangle(positionX*0.4, tHeight*2, '#7ED321'),
             // new Rectangle(positionX*0.5, tHeight*2, '#7ED321'),
             // new Rectangle(positionX*0.5, tHeight*3, '#7ED321')]
             ]
};

//3
var iBlock = {
  'name' : 'iBlock',
  'color' : '#50E3C2',
  'number' : 1000,
  "shape" : [[new Rectangle(positionX*0.3, tHeight, '#50E3C2'),
             new Rectangle(positionX*0.4, tHeight, '#50E3C2'),
             new Rectangle(positionX*0.5, tHeight, '#50E3C2'),
             new Rectangle(positionX*0.6, tHeight, '#50E3C2')]
             // ],

             // [new Rectangle(positionX*0.5, tHeight*0, '#50E3C2'),
             // new Rectangle(positionX*0.5, tHeight*1, '#50E3C2'),
             // new Rectangle(positionX*0.5, tHeight*2, '#50E3C2'),
             // new Rectangle(positionX*0.5, tHeight*3, '#50E3C2')],

             // [new Rectangle(positionX*0.3, tHeight, '#50E3C2'),
             // new Rectangle(positionX*0.4, tHeight, '#50E3C2'),
             // new Rectangle(positionX*0.5, tHeight, '#50E3C2'),
             // new Rectangle(positionX*0.6, tHeight, '#50E3C2')],

             // [new Rectangle(positionX*0.5, tHeight*0, '#50E3C2'),
             // new Rectangle(positionX*0.5, tHeight*1, '#50E3C2'),
             // new Rectangle(positionX*0.5, tHeight*2, '#50E3C2'),
             // new Rectangle(positionX*0.5, tHeight*3, '#50E3C2')]
             ]
};

//4
var oBlock = {
  'name' : 'oBlock',
  'color' : '#F8E71C',
  'number' : 1000,
  "shape" : [[new Rectangle(positionX*0.4, tHeight, '#F8E71C'),
             new Rectangle(positionX*0.5, tHeight, '#F8E71C'),
             new Rectangle(positionX*0.4, tHeight*2, '#F8E71C'),
             new Rectangle(positionX*0.5, tHeight*2, '#F8E71C')],

             // [new Rectangle(positionX*0.4, tHeight, '#F8E71C'),
             // new Rectangle(positionX*0.5, tHeight, '#F8E71C'),
             // new Rectangle(positionX*0.4, tHeight*2, '#F8E71C'),
             // new Rectangle(positionX*0.5, tHeight*2, '#F8E71C')],

             // [new Rectangle(positionX*0.4, tHeight, '#F8E71C'),
             // new Rectangle(positionX*0.5, tHeight, '#F8E71C'),
             // new Rectangle(positionX*0.4, tHeight*2, '#F8E71C'),
             // new Rectangle(positionX*0.5, tHeight*2, '#F8E71C')],

             // [new Rectangle(positionX*0.4, tHeight, '#F8E71C'),
             // new Rectangle(positionX*0.5, tHeight, '#F8E71C'),
             // new Rectangle(positionX*0.4, tHeight*2, '#F8E71C'),
             // new Rectangle(positionX*0.5, tHeight*2, '#F8E71C')]
             ]
};

//5
var zBlock = {
  'name' : 'zBlock',
  'color' : '#D0021B',
  'number' : 1000,
  "shape" : [[new Rectangle(positionX*0.3, tHeight, '#D0021B'),
             new Rectangle(positionX*0.4, tHeight, '#D0021B'),
             new Rectangle(positionX*0.4, tHeight*2, '#D0021B'),
             new Rectangle(positionX*0.5, tHeight*2, '#D0021B')],

             // [new Rectangle(positionX*0.4, tHeight, '#D0021B'),
             // new Rectangle(positionX*0.4, tHeight*2, '#D0021B'),
             // new Rectangle(positionX*0.3, tHeight*2, '#D0021B'),
             // new Rectangle(positionX*0.3, tHeight*3, '#D0021B')],

             // [new Rectangle(positionX*0.3, tHeight, '#D0021B'),
             // new Rectangle(positionX*0.4, tHeight, '#D0021B'),
             // new Rectangle(positionX*0.4, tHeight*2, '#D0021B'),
             // new Rectangle(positionX*0.5, tHeight*2, '#D0021B')],

             // [new Rectangle(positionX*0.4, tHeight, '#D0021B'),
             // new Rectangle(positionX*0.4, tHeight*2, '#D0021B'),
             // new Rectangle(positionX*0.3, tHeight*2, '#D0021B'),
             // new Rectangle(positionX*0.3, tHeight*3, '#D0021B')]
             ]
};

//6
var lBlock = {
  'name' : 'lBlock',
  'color' : '#E59512',
  'number' : 1000,
  "shape" : [[new Rectangle(positionX*0.5, tHeight, '#E59512'),
             new Rectangle(positionX*0.3, tHeight*2, '#E59512'),
             new Rectangle(positionX*0.4, tHeight*2, '#E59512'),
             new Rectangle(positionX*0.5, tHeight*2, '#E59512')],

             // [new Rectangle(positionX*0.5, tHeight*3, '#E59512'),
             // new Rectangle(positionX*0.4, tHeight, '#E59512'),
             // new Rectangle(positionX*0.4, tHeight*2, '#E59512'),
             // new Rectangle(positionX*0.4, tHeight*3, '#E59512')],

             // [new Rectangle(positionX*0.3, tHeight*3, '#E59512'),
             // new Rectangle(positionX*0.3, tHeight*2, '#E59512'),
             // new Rectangle(positionX*0.4, tHeight*2, '#E59512'),
             // new Rectangle(positionX*0.5, tHeight*2, '#E59512')],

             // [new Rectangle(positionX*0.4, tHeight, '#E59512'),
             // new Rectangle(positionX*0.3, tHeight, '#E59512'),
             // new Rectangle(positionX*0.4, tHeight*2, '#E59512'),
             // new Rectangle(positionX*0.4, tHeight*3, '#E59512')]
             ]

};


