export const script = [
  {
    prompt: 'transformation efforts',
    messages: [
      {
        speaker: 'bot',
        type: 'text',
        text: "Hi Hannah, I sensed that you are having some trouble with your doc. Do you need help?",
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
            title: 'Invitation Template',
            link: '\\\\waterspark\\SusYYY\\drive\\MOZ\\\nResources\\Templates\\townhalls',
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
            text: "This video was recommended by your manager during the events discussion.",
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
        text: 'thanks Merly, this is helpful! I wanna learn more. Anything more u can share?',
        type: 'text',
      },
      {
        type: 'messageList',
        speaker: 'bot',
        messageList: [
          {
            type: 'text',
            text: 'sure! Your colleagues from your agency have told me they have found this to be helpful. I\'ve highlighted the paragraph that talks about responsibilities.',
          },
          {
            type: 'custom',
            componentName: 'snippet',
          },
          {
            type: 'link',
            title: 'Advanced Writing and Staff Work',
            link: 'https://www.mindef.gov.sg/oms/content/imindef/publications/pointer/supplements/onstaffwork/_jcr_content/imindefPars/0013/file.res/ON%20STAFF%20WORK(L)_280809.pdf',
            target: '_blank'
          },
          {
            type: 'text',
            text: "Do you find it helpful?",
          },
        ],
      },
      {
        speaker: 'user',
        text: 'Omg you are really amazing Merly! How do you know staffing is another concern on my mind!',
        type: 'text',
      },
      {
        speaker: 'bot',
        text: '😁',
        type: 'text',
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
            text: 'Don\'t fret! I know of someone who can help you! Linda Khoo, Linda_khoo@moz.gov.sg, ext: 6743 may be able to help you!',
          },
          // {
          //   type: 'custom',
          //   componentName: 'videoCallComponent',
          // },
        ],
      },
      {
        speaker: 'user',
        text: 'hey I called. Linda is great and I had quite a nbr of questions answered! Writing and staffing are really useful skills for any public officer. Can you help me curate a list of resources? Reminds me of this coming Tuesday morning. I hope to spend some time going through them! And btw how else can I pick up more writing staffing tips?',
        type: 'text',
      },
      {
        type: 'messageList',
        speaker: 'bot',
        messageList: [
          {
            type: 'text',
            text: 'Ok sure. I see that you\'ve completed the regular writing training. Based on your job title, I would recommend that you take a look at this course which is helpful when writing invitations as public servants.',
          },
          {
            type: 'link',
            speaker: 'bot',
            title: 'From Organisational Capabilities to Capability Plans',
            link: 'https://www.cscollege.gov.sg/programmes/Pages/Display%20Programme.aspx?ePID=e3wfg83wrgcahb36bbuw6efl7s',
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

export const letter = `
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