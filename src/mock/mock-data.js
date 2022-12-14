import { filters } from "../const";

export const mockData = [
  {
    reviewId: "111111eeeeee",
    author: "Valeriya",
    productTitle: "Inside Man",
    category: filters.movies,
    reviewTitle: "A dark, gripping thriller which earns its secrecy",
    reviewImageUrl:
      "https://images.immediate.co.uk/production/volatile/sites/3/2021/03/395618-d4f5a43.jpg?quality=90&resize=980,654",
    rating: 9,
    grades: [
      {
        user: "Stanley",
        userId: "1werwerf2wedf3",
        grade: 3,
      },
      {
        user: "Andrew",
        userId: "1werwerf2wedf3",
        grade: 4,
      },
      {
        user: "Valerie",
        userId: "1werwerf2wedf3",
        grade: 4,
      },
      {
        user: "Jimmy",
        userId: "1werwerf2wedf3",
        grade: 2,
      },
      {
        user: "Xavier",
        userId: "1werwerf2wedf3",
        grade: 5,
      },
    ],
    likes: ["Xavier", "Max", "Stanley", "Tommy"],
    tags: ["worthwatching", "new", "topmovies"],
    reviewExtract:
      "Moffat's latest work is a stunning showcase for David Tennant.",
    reviewContent:
      "It's fair to say that Inside Man arrives with some fairly lofty expectations - not only because of creator Steven Moffat's own pedigree, or even the immensely talented and widely popular cast he has assembled. No, it's also because, ahead of release, it's an absolute mystery. We know some of the character details – David Tennant is playing a vicar – and we know the basic locations – with Stanley Tucci's Jefferson Grieff in an American prison on death row. But that's it. While all this secrecy can be frustrating, it also helps to build that anticipation, as you have to assume there's a very good reason for it. Well, rest assured - there is, and we certainly won't be ruining that here. Inside Man is a devilishly, deliciously dark piece of drama, hinging on a string of catastrophically bad decisions made throughout the first episode. Audible gasps could be heard at an early screening ahead of its BBC One premiere, and it's easy to imagine that effect being replicated nation-wide, even for those who see the impending doom coming. If you've been paying attention then the 'reveal' may be semi-predictable by the time it arrives, but that doesn't lessen its effect. Because it's less about what is made known, and more about how things transpire, the gradual build-up of tension to the point where you can see what's going to occur and are yelling at your TV in desperation for it not to.",
    comments: [
      {
        user: "Stanley",
        userId: "1sdfsddfs2we6sdf",
        comment: "Thanks for such a great review!",
        date: `${new Date(2022, 10, 11, 12, 18, 0, 0)}`,
      },
      {
        user: "Andrew",
        userId: "1sdfsddfs2we6sdf",
        comment:
          "WOW!!!! I guess it's quite a story! Definitely gonna see it tommorow",
        date: `${new Date(2022, 10, 18, 9, 16, 0, 0)}`,
      },
      {
        user: "Valerie",
        userId: "1sdfsddfs2we6sdf",
        comment:
          "Great cast and intriguing story. Totally agree with your review. ",
        date: `${new Date(2022, 10, 22, 0, 18, 0, 0)}`,
      },
      {
        user: "Stanley",
        userId: "1sdfsddfs2we6sdf",
        comment: "Thanks for such a great review!",
        date: `${new Date(2022, 10, 23, 22, 25, 0, 0)}`,
      },
      {
        user: "Andrew",
        userId: "1sdfsddfs2we6sdf",
        comment:
          "WOW!!!! I guess it's quite a story! Definitely gonna see it tommorow",
        date: `${new Date(2022, 11, 1, 11, 11, 0, 0)}`,
      },
      {
        user: "Valerie",
        userId: "1sdfsddfs2we6sdf",
        comment:
          "Great cast and intriguing story. Totally agree with your review. ",
        date: `${new Date(2022, 11, 5, 9, 10, 0, 0)}`,
      },
      {
        user: "Stanley",
        userId: "1sdfsddfs2we6sdf",
        comment: "Thanks for such a great review!",
        date: `${new Date(2022, 11, 11, 16, 18, 0, 0)}`,
      },
      {
        user: "Andrew",
        userId: "1sdfsddfs2we6sdf",
        comment:
          "WOW!!!! I guess it's quite a story! Definitely gonna see it tommorow",
        date: `${new Date(2022, 11, 11, 22, 23, 0, 0)}`,
      },
      {
        user: "Valerie",
        userId: "1sdfsddfs2we6sdf",
        comment:
          "Great cast and intriguing story. Totally agree with your review. ",
        date: `${new Date(2022, 11, 16, 9, 18, 0, 0)}`,
      },
    ],
  },

  {
    reviewId: "1aqw2rty3ret",
    author: "Jimmy",
    productTitle: "Glass Onion: A Knives Out Mystery",
    category: filters.movies,
    reviewTitle: "It is bigger and better than the Original",
    reviewImageUrl:
      "https://static01.nyt.com/images/2022/11/24/multimedia/21glassonion1-1-f589/21glassonion1-1-f589-videoSixteenByNine3000.jpg",
    rating: 10,
    grades: [
      {
        user: "Stanley",
        userId: "1werwerf2wedf3",
        grade: 4,
      },
      {
        user: "Andrew",
        userId: "1werwerf2wedf3",
        grade: 5,
      },
      {
        user: "Valerie",
        userId: "1werwerf2wedf3",
        grade: 5,
      },
      {
        user: "Jimmy",
        userId: "1werwerf2wedf3",
        grade: 5,
      },
      {
        user: "Xavier",
        userId: "1werwerf2wedf3",
        grade: 5,
      },
    ],
    likes: ["Xavier", "Max", "Stanley", "Tommy", "Valerie", "Julia", "Anna"],
    tags: ["awesome", "great", "intriguing"],
    reviewExtract:
      "The rich are richer in Glass Onion, the effervescent sequel to Knives Out that just had its premiere at the Toronto International Film Festival, and arguably more awful — or, at least, awful in grander and more visible ways.",
    reviewContent:
      "While Rian Johnson’s 2019 whodunit focused on the stunted relatives of a famed novelist, people who at least put up some pretense of respectability, his new one turns its attention to a group of “disruptors” who are prominent enough to practice their respective grifts right out in the open. Claire Debella (Kathryn Hahn) is the governor of Connecticut and an aspiring senator who talks tough on CNN while quietly approving untested tech in exchange for donor money. Lionel Toussaint (Leslie Odom Jr.) is head scientist at the company, Alpha, that’s responsible for that untested tech, and has rushed timelines and skipped safety procedures at the behest of his boss. Birdie Jay (Kate Hudson) is a media personality turned sweatband brand owner who’s so prone to viral scandals that her assistant, Peg (Jessica Henwick), is the keeper of her phone. Duke Cody (Dave Bautista) is a social-media star who’s taken a turn to the alt-right, using his ever-present gun and his much younger girlfriend, Whiskey (Madelyn Cline), as props. Wealthiest and most repellent of them all is Miles Bron (Edward Norton), who’s the host of the weekend getaway during which the mystery unfolds, a mogul and supposed genius who doesn’t actually seem to do much except self-mythologize and use his money to push people around. He owes more than a bit to Elon Musk, but these crumbling pillars of contemporary society are all designed to feel at least a little familiar. (Maybe too familiar, in the case of Hudson, who’s an absolute scream as the vapid Birdie, but whose activewear brand has been privy to labor-abuse accusations not unlike those of her character’s company, a convergence that’s more of a joke at the audience’s expense than her own.) Glass Onion is bigger and more precisely designed than Knives Out, but what makes it a more satisfying movie is that it sits with its characters more rather than immediately showing off their decay. Instead, theirs is the kind of hollowness that comes from a lifetime of smaller moral compromises, until suddenly you’re on a Greek island with some old friends, contemplating murder.Obviously, there is a murder, though it happens eventually rather than toward the start of the film, tensions simmering over the course of an annual gathering on Miles’s private Greek island, where he’s built a delightfully hideous mansion that includes a see-through dome filled with billionaire bachelor-pad décor — a douchebag Taj Mahal. This year, Miles intends to throw a murder-mystery party, though he has two surprise guests. Andi (Janelle Monáe), the former business partner who unsuccessfully sued him when he booted her from their company, wasn’t expected to show. And Benoit Blanc (Daniel Craig), the master detective from Knives Out, wasn’t invited at all, and yet somehow became the recipient of one of the custom puzzle boxes Miles had shipped out to his chosen attendees. Craig’s evident delight in playing Blanc, with his neckerchiefs and Southern-fried accent, is infectious, and Glass Onion’s longer wind-up allows glimpses into the character’s personal life, which include some random but enjoyable cameos. Johnson allows events to spin out to a pivotal party sequence that’s made jittery by its slightly too quick editing, and then takes us back to the start, revisiting scenes from different angles and with new information.",
    comments: [
      {
        user: "Henry",
        userId: "1sdfsddfs2we6sdf",
        comment:
          "I'm so up for this. Johnson's really not put much of a foot wrong in his career, just a great pop auteur who even managed to put some character into as hidebound a franchise property as Star Wars. And Knives Out was a hoot - everyone was clearly massively enjoying throwing themselves into the hokum.",
        date: `${new Date(2022, 10, 20, 6, 18, 0, 0)}`,
      },
      {
        user: "Julie",
        userId: "1sdfsddfs2we6sdf",
        comment:
          "Looking forward to seeing this , I really enjoyed the first one.",
        date: `${new Date(2022, 10, 21, 9, 10, 0, 0)}`,
      },
      {
        user: "Henry",
        userId: "1sdfsddfs2we6sdf",
        comment:
          "I'm so up for this. Johnson's really not put much of a foot wrong in his career, just a great pop auteur who even managed to put some character into as hidebound a franchise property as Star Wars. And Knives Out was a hoot - everyone was clearly massively enjoying throwing themselves into the hokum.",
        date: `${new Date(2022, 11, 1, 15, 20, 0, 0)}`,
      },
      {
        user: "Julie",
        userId: "1sdfsddfs2we6sdf",
        comment:
          "Looking forward to seeing this , I really enjoyed the first one.",
        date: `${new Date(2022, 11, 3, 3, 7, 0, 0)}`,
      },
      {
        user: "Henry",
        userId: "1sdfsddfs2we6sdf",
        comment:
          "I'm so up for this. Johnson's really not put much of a foot wrong in his career, just a great pop auteur who even managed to put some character into as hidebound a franchise property as Star Wars. And Knives Out was a hoot - everyone was clearly massively enjoying throwing themselves into the hokum.",
        date: `${new Date(2022, 11, 10, 10, 19, 0, 0)}`,
      },
      {
        user: "Julie",
        userId: "1sdfsddfs2we6sdf",
        comment:
          "Looking forward to seeing this , I really enjoyed the first one.",
        date: `${new Date(2022, 11, 15, 9, 18, 0, 0)}`,
      },
      {
        user: "Henry",
        userId: "1sdfsddfs2we6sdf",
        comment:
          "I'm so up for this. Johnson's really not put much of a foot wrong in his career, just a great pop auteur who even managed to put some character into as hidebound a franchise property as Star Wars. And Knives Out was a hoot - everyone was clearly massively enjoying throwing themselves into the hokum.",
        date: `${new Date(2022, 11, 16, 10, 9, 0, 0)}`,
      },
      {
        user: "Julie",
        userId: "1sdfsddfs2we6sdf",
        comment:
          "Looking forward to seeing this , I really enjoyed the first one.",
        date: `${new Date(2022, 11, 16, 23, 20, 0, 0)}`,
      },
      {
        user: "Henry",
        userId: "1sdfsddfs2we6sdf",
        comment:
          "I'm so up for this. Johnson's really not put much of a foot wrong in his career, just a great pop auteur who even managed to put some character into as hidebound a franchise property as Star Wars. And Knives Out was a hoot - everyone was clearly massively enjoying throwing themselves into the hokum.",
        date: `${new Date(2022, 11, 18, 17, 30, 0, 0)}`,
      },
      {
        user: "Julie",
        userId: "1sdfsddfs2we6sdf",
        comment:
          "Looking forward to seeing this , I really enjoyed the first one.",
        date: `${new Date(2022, 11, 20, 18, 18, 0, 0)}`,
      },
    ],
  },
  {
    reviewId: "22qqqwr54q5w",
    author: "Tommy",
    productTitle: "Flowers for Algernon",
    category: filters.books,
    reviewTitle:
      "an amazing journey that makes you take a step back and rethink things",
    reviewImageUrl: "https://media.s-bol.com/DY9K0jOzlggk/wV6q0xg/550x836.jpg",
    rating: 9,
    grades: [
      {
        user: "Stanley",
        userId: "1werwerf2wedf3",
        grade: 4,
      },
      {
        user: "Andrew",
        userId: "1werwerf2wedf3",
        grade: 4,
      },
      {
        user: "Valerie",
        userId: "1werwerf2wedf3",
        grade: 5,
      },
      {
        user: "Jimmy",
        userId: "1werwerf2wedf3",
        grade: 5,
      },
      {
        user: "Xavier",
        userId: "1werwerf2wedf3",
        grade: 3,
      },
    ],
    likes: ["Xavier", "Max", "Stanley", "Tommy", "Valerie", "Julia", "Anna"],
    tags: ["awesome", "great", "intriguing"],
    reviewExtract:
      "Flowers for Algernon is a book that says to you: “I want you to question everything you know",
    reviewContent: "",
    comments: [
      {
        user: "Valerie",
        userId: "1sdfsddfs2we6sdf",
        comment:
          "A book I will never forget! It tells us why is so important to be nice and love each other because Love is the only force that will always win among us humans.",
        date: `${new Date(2022, 11, 5, 9, 18, 0, 0)}`,
      },
      {
        user: "Eddie",
        userId: "1sdfsddfs2we6sdf",
        comment:
          "Interesting viewpoints – I don’t really think it’s a science fiction book, more of a contemporary story from the 60s as it appears quite reflective of the times. I like the novel a lot, I don’t think it’s perfect in any way and of course it’s predictable but it has a statement to make about how society perceives people with learning difficulties. It’s not heartwarming but it has an emotional pull.",
        date: `${new Date(2022, 11, 8, 8, 20, 0, 0)}`,
      },
      {
        user: "Anna",
        userId: "1sdfsddfs2we6sdf",
        comment:
          "I've not read this book, but it sounds very interesting. One to put on my list, thankyou.",
        date: `${new Date(2022, 11, 11, 11, 10, 0, 0)}`,
      },
      {
        user: "Valerie",
        userId: "1sdfsddfs2we6sdf",
        comment:
          "A book I will never forget! It tells us why is so important to be nice and love each other because Love is the only force that will always win among us humans.",
        date: `${new Date(2022, 11, 14, 16, 15, 0, 0)}`,
      },
      {
        user: "Eddie",
        userId: "1sdfsddfs2we6sdf",
        comment:
          "Interesting viewpoints – I don’t really think it’s a science fiction book, more of a contemporary story from the 60s as it appears quite reflective of the times. I like the novel a lot, I don’t think it’s perfect in any way and of course it’s predictable but it has a statement to make about how society perceives people with learning difficulties. It’s not heartwarming but it has an emotional pull.",
        date: `${new Date(2022, 11, 17, 20, 18, 0, 0)}`,
      },
      {
        user: "Anna",
        userId: "1sdfsddfs2we6sdf",
        comment:
          "I've not read this book, but it sounds very interesting. One to put on my list, thankyou.",
        date: `${new Date(2022, 11, 19, 9, 18, 0, 0)}`,
      },
      {
        user: "Valerie",
        userId: "1sdfsddfs2we6sdf",
        comment:
          "A book I will never forget! It tells us why is so important to be nice and love each other because Love is the only force that will always win among us humans.",
        date: `${new Date(2022, 11, 21, 20, 18, 0, 0)}`,
      },
      {
        user: "Eddie",
        userId: "1sdfsddfs2we6sdf",
        comment:
          "Interesting viewpoints – I don’t really think it’s a science fiction book, more of a contemporary story from the 60s as it appears quite reflective of the times. I like the novel a lot, I don’t think it’s perfect in any way and of course it’s predictable but it has a statement to make about how society perceives people with learning difficulties. It’s not heartwarming but it has an emotional pull.",
        date: `${new Date(2022, 11, 22, 12, 12, 0, 0)}`,
      },
      {
        user: "Anna",
        userId: "1sdfsddfs2we6sdf",
        comment:
          "I've not read this book, but it sounds very interesting. One to put on my list, thankyou.",
        date: `${new Date(2022, 11, 23, 13, 19, 0, 0)}`,
      },
      {
        user: "Valerie",
        userId: "1sdfsddfs2we6sdf",
        comment:
          "A book I will never forget! It tells us why is so important to be nice and love each other because Love is the only force that will always win among us humans.",
        date: `${new Date(2022, 11, 24, 18, 18, 0, 0)}`,
      },
      {
        user: "Eddie",
        userId: "1sdfsddfs2we6sdf",
        comment:
          "Interesting viewpoints – I don’t really think it’s a science fiction book, more of a contemporary story from the 60s as it appears quite reflective of the times. I like the novel a lot, I don’t think it’s perfect in any way and of course it’s predictable but it has a statement to make about how society perceives people with learning difficulties. It’s not heartwarming but it has an emotional pull.",
        date: `${new Date(2022, 11, 26, 11, 13, 0, 0)}`,
      },
      {
        user: "Anna",
        userId: "1sdfsddfs2we6sdf",
        comment:
          "I've not read this book, but it sounds very interesting. One to put on my list, thankyou.",
        date: `${new Date(2022, 11, 26, 22, 12, 0, 0)}`,
      },
    ],
  },
  {
    reviewId: "71unhcddk9i0",
    author: "Wild gamer",
    productTitle: "Sonic Frontiers",
    category: filters.games,
    reviewTitle: "wild, weird and a bit broken",
    reviewImageUrl:
      "https://www.gameshub.com/wp-content/uploads/sites/5/2022/11/sonic-frontiers-review.jpg",
    rating: 6,
    grades: [
      {
        user: "Stanley",
        userId: "1werwerf2wedf3",
        grade: 4,
      },
      {
        user: "Andrew",
        userId: "1werwerf2wedf3",
        grade: 4,
      },
      {
        user: "Valerie",
        userId: "1werwerf2wedf3",
        grade: 5,
      },
      {
        user: "Jimmy",
        userId: "1werwerf2wedf3",
        grade: 5,
      },
      {
        user: "Xavier",
        userId: "1werwerf2wedf3",
        grade: 3,
      },
    ],
    likes: ["Xavier", "Max", "Stanley", "Tommy", "Valerie", "Julia", "Anna"],
    tags: ["awesome", "great", "intriguing"],
    reviewExtract:
      "The open-world adventure is brilliant in terms of input and response at the expense of any discernible logic",
    reviewContent: "",
    comments: [
      {
        user: "Stanley",
        userId: "1sdfsddfs2we6sdf",
        comment: "SONIC is cool",
        date: `${new Date(2022, 11, 11, 9, 18, 0, 0)}`,
      },
      {
        user: "Andrew",
        userId: "1sdfsddfs2we6sdf",
        comment:
          "I think a Sonic game with a relatively decent score is cause for celebration. I can't remember the last really good Sonic game apart from the originals on the genesis. Here's to a return to form!",
        date: `${new Date(2022, 11, 12, 13, 1, 0, 0)}`,
      },
      {
        user: "Valerie",
        userId: "1sdfsddfs2we6sdf",
        comment:
          "The Sonic Adventure games, even if they're a bit dated now, Sonic Colors and Generations, and Sonic Mania are all viewed as highlights. Depending on who you ask, Sonic Heroes and Sonic Unleashed could be added to the list, too, but those two are definitely closer to the mixed side.",
        date: `${new Date(2022, 11, 22, 9, 8, 0, 0)}`,
      },
      {
        user: "Stanley",
        userId: "1sdfsddfs2we6sdf",
        comment: "SONIC is cool",
        date: `${new Date(2022, 11, 23, 7, 15, 0, 0)}`,
      },
      {
        user: "Andrew",
        userId: "1sdfsddfs2we6sdf",
        comment:
          "I think a Sonic game with a relatively decent score is cause for celebration. I can't remember the last really good Sonic game apart from the originals on the genesis. Here's to a return to form!",
        date: `${new Date(2022, 11, 24, 23, 7, 0, 0)}`,
      },
      {
        user: "Valerie",
        userId: "1sdfsddfs2we6sdf",
        comment:
          "The Sonic Adventure games, even if they're a bit dated now, Sonic Colors and Generations, and Sonic Mania are all viewed as highlights. Depending on who you ask, Sonic Heroes and Sonic Unleashed could be added to the list, too, but those two are definitely closer to the mixed side.",
        date: `${new Date(2022, 10, 10, 9, 18, 0, 0)}`,
      },
      {
        user: "Stanley",
        userId: "1sdfsddfs2we6sdf",
        comment: "SONIC is cool",
        date: `${new Date(2022, 10, 17, 16, 18, 0, 0)}`,
      },
      {
        user: "Andrew",
        userId: "1sdfsddfs2we6sdf",
        comment:
          "I think a Sonic game with a relatively decent score is cause for celebration. I can't remember the last really good Sonic game apart from the originals on the genesis. Here's to a return to form!",
        date: `${new Date(2022, 11, 17, 16, 18, 0, 0)}`,
      },
      {
        user: "Valerie",
        userId: "1sdfsddfs2we6sdf",
        comment:
          "The Sonic Adventure games, even if they're a bit dated now, Sonic Colors and Generations, and Sonic Mania are all viewed as highlights. Depending on who you ask, Sonic Heroes and Sonic Unleashed could be added to the list, too, but those two are definitely closer to the mixed side.",
        date: `${new Date(2022, 11, 17, 16, 18, 0, 0)}`,
      },
      {
        user: "Stanley",
        userId: "1sdfsddfs2we6sdf",
        comment: "SONIC is cool",
        date: `${new Date(2022, 11, 17, 16, 18, 0, 0)}`,
      },
      {
        user: "Andrew",
        userId: "1sdfsddfs2we6sdf",
        comment:
          "I think a Sonic game with a relatively decent score is cause for celebration. I can't remember the last really good Sonic game apart from the originals on the genesis. Here's to a return to form!",
        date: `${new Date(2022, 11, 17, 16, 18, 0, 0)}`,
      },
      {
        user: "Valerie",
        userId: "1sdfsddfs2we6sdf",
        comment:
          "The Sonic Adventure games, even if they're a bit dated now, Sonic Colors and Generations, and Sonic Mania are all viewed as highlights. Depending on who you ask, Sonic Heroes and Sonic Unleashed could be added to the list, too, but those two are definitely closer to the mixed side.",
        date: `${new Date(2022, 11, 17, 16, 18, 0, 0)}`,
      },
    ],
  },
];
