/*   Move your content array out of your ContentList and into its own file called contentDb.ts in the helper-files folder. */
import { Content } from '../helper-files/content-interface';

export const contentDb: Content[] = [
    {
      id: 1,
      title: 'Lago Negro',
      description:
        'Take a stroll around the beautiful black lake, surrounded by gardens and pine trees, and rent a paddleboat to explore the waters together.',
      creator: 'Jaime Prawer',
      imgURL: 'https://picsum.photos/id/10/200/300',
      type: 'romantic',
      tags: [
        '#landscape',
        '#nature',
        'lake',
        '#tourism',
        '#travel',
        '#vacation',
        '#water',
        '#waterfall',
        '#wildlife',
        '#winter',
        '#world',
      ],
    },
    {
      id: 2,
      title: 'Mini Mundo',
      description:
        'This miniature park features tiny replicas of iconic buildings and landmarks from around the world, making it a whimsical and unique place to explore together.',
      creator: 'Jane Doe',
      type: 'romantic',
      tags: [
        '#amazing',
        '#art',
        '#beautiful',
        '#beauty',
        '#colorful',
        '#color',
        '#design',
        '#flower',
        '#flowers',
        '#garden',
        '#gardens',
        '#green',
        '#landscape',
        '#nature',
        '#park',
        '#tourism',
        '#travel',
        '#vacation',
        '#water',
        '#waterfall',
        '#wildlife',
        '#winter',
        '#world',
      ],
    },
    {
      id: 3,
      title: 'Snowland',
      description:
        "If you're looking for a more adventurous date, head to Snowland, where you can experience skiing, snowboarding, and snow tubing together, regardless of the season.",
      creator: 'John Smith',
      imgURL: 'https://picsum.photos/id/12/200/300',
      type: 'romantic',
      tags: [
        '#amazing',
        '#art',
        '#beautiful',
        '#beauty',
        '#colorful',
        '#color',
        '#design',
        '#flower',
        '#flowers',
        '#garden',
        '#gardens',
        '#green',
        '#landscape',
        '#nature',
        '#park',
        '#tourism',
        '#travel',
        '#vacation',
        '#water',
        '#waterfall',
        '#wildlife',
        '#winter',
        '#world',
      ],
    },
    {
      id: 4,
      title: 'Le Jardin',
      description:
        'Walk hand in hand through the fields of lavender, take a romantic photo in the heart-shaped flowerbed, and enjoy a cup of lavender tea at the cafe.',
      creator: 'Bob',
      imgURL: 'https://picsum.photos/id/13/200/300',
      type: 'romantic',
      tags: ['#lavander', '#nature', '#garden'],
    },
    {
      id: 5,
      title: 'Covered Street',
      description:
        ': This covered street is lined with restaurants, cafes, and shops, making it the perfect place to stroll and window-shop together, especially on a rainy day.',
      creator: 'Alice',
      imgURL: 'https://picsum.photos/id/14/200/300',
      type: 'romantic',
      tags: [
        '#shop',
        '#street',
        '#tourism',
        '#travel',
        '#vacation',
        '#water',
        '#waterfall',
        '#wildlife',
        '#winter',
        '#world',
      ],
    },
    {
      id: 6,
      title: 'Veu da Noiva Waterfall',
      description: '',
      creator: 'Alice',
      imgURL: 'https://picsum.photos/id/15/200/300',
      type: 'romantic',
      tags: ['#waterfall', '#nature', '#garden'],
    },
    //Assignment 3 - Add 3 more contents
    {
      id: 7,
      title: 'Seventh Content',
      description: 'Description of seventh content',
      creator: 'Bob',
      type: 'romanctic',
      imgURL: 'https://picsum.photos/id/16/200/300',
      tags: ['Tag 19', 'Tag 20', 'Tag 21'],
    },
    {
      id: 8,
      title: 'Eighth Content',
      description: 'Description of eighth content',
      creator: 'Bob',
      type: 'Adventure',
      tags: ['Tag 22', 'Tag 23', 'Tag 24'],
    },
    {
      id: 9,
      title: 'Portico de Gramado',
      description: 'Description of ninth content',
      creator: 'Bob',
      imgURL: 'https://picsum.photos/id/18/200/300',
      tags: ['#nature', '#garden'],
    },
    {
      id: 10,
      title: 'Chocolate Factory',
      description: 'An amazing place to visit',
      creator: 'Bob',
      imgURL: 'https://picsum.photos/id/19/200/300',
      type: 'romantic',
      tags: ['#chocolate', '#gramado', '#trip'],
    },
  ];
/*
  constructor(private cdr: ChangeDetectorRef) {
    this.filteredContentArray = [];
  }

  ngOnInit() {
    // Clone the array to avoid mutating the original data
    this.contentArray = [...this.contentArray];
  }

  //Assignment 2 - Add a method to log the content id and title when clicked
  onContentClick(content: Content) {
    console.log(`Content clicked: id: ${content.id}, title: ${content.title}`);
  }

  //Assignment 3 - Add a method to search for a content by title
  searchForTitle() {
    const foundContent = this.contentArray.find(
      (content) => content.title === this.searchTitle
    );
    if (foundContent) {
      this.filteredContentArray = [foundContent];
      this.contentFound = true;
      this.message = `Content item with title "${this.searchTitle}" found!`;
    } else {
      this.filteredContentArray = [];
      this.contentFound = false;
      this.message = `Content item with title "${this.searchTitle}" not found.`;
    }
  }

  onContentAdded(content: Content) {
    this.contentArray.push(content);
    this.contentArray = [...this.contentArray];
  }
 */
