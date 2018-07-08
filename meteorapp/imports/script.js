export const script = [
  {
    prompt: 'transformation efforts',
    messages: [
      {
        speaker: 'bot',
        type: 'text',
        text: "Hi Gabriel, I sensed that you are having some trouble with your doc. Do you need help?",
      },
      {
        speaker: 'user',
        type: 'text',
        text: 'omg Merly! yes I will need some helppp',
      },
      {
        type: 'text',
        speaker: 'bot',
        type: 'messageList',
        messageList: [
          {
            type: 'text',
            text: 'here, see if this helps!',
          },
          {
            type: 'link',
            componentName: 'templateLink',
            title: ' Organization transformation paper',
            link: '\\\\waterspark\\SusYYY\\drive\\MOZ\\\nResources\\Paper\\OrganizationTransformation2016',
            target: '_blank'
          },
        ],
      },
      {
        speaker: 'user',
        type: 'text',
        text: 'Merly, this is great! Anything else you have?',
      },
      {
        type: 'messageList',
        speaker: 'bot',
        messageList: [
          {
            type: 'text',
            text: "Your colleagues from your agency mentioned this video and article were useful.",
          },
          {
            type: 'custom',
            componentName: 'videoComponent',
          },
          {
            type: 'text',
            text: "How is that?",
          },
        ],
      },
      {
        speaker: 'user',
        text: 'heyyy checked out the materials I still have some questions on both writing and staffing',
        type: 'text',
      },
      {
        type: 'messageList',
        speaker: 'bot',
        messageList: [
          {
            type: 'text',
            text: 'Don\'t fret! I know of someone who can help you! Linda Khoo from the Strat Planning unit, Linda_khoo@moz.gov.sg, ext: 6743 may be able to help you!',
          },
        ],
      },
      {
        speaker: 'user',
        text: 'hey I called. Linda is great and I had quite a nbr of questions answered! Just wondering, do you have any recoomendations on change management courses?',
        type: 'text',
      },
      {
        type: 'messageList',
        speaker: 'bot',
        messageList: [
          {
            type: 'text',
            text: 'Ok sure. I see that you\'ve completed the regular training. Based on your job title, I would recommend this course.',
          },
          {
            type: 'link',
            speaker: 'bot',
            title: 'Leading and Sustaining Change',
            link: 'https://www.cscollege.gov.sg/programmes/pages/display%20programme.aspx?epid=lhkrr7r1lnwcg4om7264ncftoo',
            target: '_blank'
          },
        ],
      },
    ],
  },
  {
    prompt: 'next word',
    messages: [
      {
        speaker: 'bot',
        text: "Hi Hannah, I sense that you're having some trouble there. Do you want any help?",
      },
      {
        speaker: 'user',
        text: 'Oh yes!',
      },
    ],
  },
  {
    prompt: 'extreme word',
    messages: [
      {
        speaker: 'bot',
        text: "Hi Hannah, I sense that you're having some trouble there. Do you want any help?",
      },
      {
        speaker: 'user',
        text: 'Oh yes!',
      },
    ],
  }
];

const actions = [
  'byte sized',
  'video 2 mins',
  'articles 1hr',
  'expert',
  'take a course CSC',
];

export const letter3 = `
    To: Chan Ling Shan
    From: Hannah Tan
    Subject: Invitation to Attend Townhall Event

    PS,
          
            I am writing to invite you to attend MOZ's townhall event on 8 September 2018.

    Background
    2.     This is the second townhall in FY'18. The upcoming townhall will focus on `;
export const letter2 = `
    2.     This is the second townhall in FY'18. The upcoming townhall will focus on 
  `;

export const letter = `
MOZ STRATEGIES TO PUBLIC SERVICE TRANSFORMATION                 FY18/2_139

Purpose:    For discussion
Date:          January 2016



Background

1.            In 2017, the Public Service embarked on a journey of Public Sector Transformation to design citizen-centric policies, services, and partner the community.

2            ODD has been tasked to look into rollout strategies for agency wide transformation.

Strategies of change management

3.            
`;