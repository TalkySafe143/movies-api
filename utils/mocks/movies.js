const moviesMock = [
  {
    id: "4a861c63-161a-48f1-9217-d8afae4fcf13",
    title: "Seven Beauties (Pasqualino Settebellezze)",
    year: 1993,
    cover: "http://dummyimage.com/192x100.png/cc0000/ffffff",
    description:
      "Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    duration: 85,
    contentRating: "NC-17",
    source: "https://multiply.com/pellentesque/at/nulla.js",
    tags: ["Action|Drama", "Comedy|Drama"],
  },
  {
    id: "7f62ed8b-21c0-4bb4-aefc-4685a63cc264",
    title: "Farewell, The (Abschied - Brechts letzter Sommer)",
    year: 2010,
    cover: "http://dummyimage.com/177x100.png/5fa2dd/ffffff",
    description:
      "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
    duration: 1,
    contentRating: "PG",
    source: "https://desdev.cn/quis/orci/nullam/molestie/nibh.jsp",
    tags: ["Drama", "Horror", "Drama"],
  },
  {
    id: "b20facd1-c262-4c9f-8b49-4338c02ed1ef",
    title: "Capital (Le capital)",
    year: 1998,
    cover: "http://dummyimage.com/117x100.png/5fa2dd/ffffff",
    description:
      "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
    duration: 37,
    contentRating: "NC-17",
    source:
      "http://ucoz.com/amet/eros/suspendisse/accumsan/tortor/quis/turpis.json",
    tags: [
      "Children|Comedy|Romance",
      "Drama|Sci-Fi|Thriller",
      "Drama",
      "Crime|Mystery|Thriller",
    ],
  },
  {
    id: "a41facb8-ce77-4560-8b7a-7302ec1e78bb",
    title: "Voll Normaaal",
    year: 2007,
    cover: "http://dummyimage.com/232x100.png/cc0000/ffffff",
    description:
      "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
    duration: 20,
    contentRating: "G",
    source: "https://devhub.com/primis/in/faucibus/orci/luctus/et.jpg",
    tags: ["Action|Comedy|Crime", "Western", "Comedy", "Comedy"],
  },
  {
    id: "85aeedbc-a48a-4b10-8432-e09003c2ea2b",
    title: "Save the Tiger",
    year: 1987,
    cover: "http://dummyimage.com/110x100.png/cc0000/ffffff",
    description:
      "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    duration: 20,
    contentRating: "PG-13",
    source: "http://stanford.edu/et/eros/vestibulum/ac/est.js",
    tags: [
      "Drama",
      "Western",
      "Action|Adventure|Mystery|Thriller",
      "Crime|Drama",
      "Drama|Romance",
    ],
  },
  {
    id: "c7f86433-9e8f-4e94-ada7-99bc73e35637",
    title: "Futurama: Bender's Game",
    year: 1996,
    cover: "http://dummyimage.com/125x100.png/5fa2dd/ffffff",
    description:
      "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    duration: 37,
    contentRating: "PG",
    source: "http://tiny.cc/congue/eget/semper/rutrum/nulla/nunc.js",
    tags: ["Documentary", "Comedy|Drama", "Drama"],
  },
  {
    id: "43fc573a-5937-4bd5-944e-3ea41f83aff6",
    title: "Blood and Roses (Et mourir de plaisir) (To Die with Pleasure)",
    year: 2010,
    cover: "http://dummyimage.com/133x100.png/cc0000/ffffff",
    description:
      "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",
    duration: 16,
    contentRating: "PG-13",
    source: "https://eepurl.com/primis/in/faucibus/orci/luctus/et/ultrices.png",
    tags: ["Comedy|Drama", "Children|Drama", "Drama|Thriller", "Crime|Drama"],
  },
  {
    id: "501f8b84-4898-4048-ae8a-ce6976baa9d2",
    title: "Witness for the Prosecution",
    year: 1993,
    cover: "http://dummyimage.com/235x100.png/ff4444/ffffff",
    description:
      "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
    duration: 15,
    contentRating: "PG",
    source: "https://geocities.jp/ullamcorper/augue/a/suscipit.json",
    tags: [
      "Comedy|Drama|Romance",
      "Comedy|Sci-Fi",
      "Horror",
      "Action|Comedy|Crime",
    ],
  },
  {
    id: "aca90c2e-f450-48de-a4c0-fc13e95d6ba2",
    title: "In the Electric Mist",
    year: 1999,
    cover: "http://dummyimage.com/232x100.png/5fa2dd/ffffff",
    description:
      "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
    duration: 20,
    contentRating: "G",
    source: "https://list-manage.com/aliquam/lacus.jpg",
    tags: ["Comedy|Fantasy", "Drama", "Drama|Romance", "Crime|Drama|Mystery"],
  },
  {
    id: "f1617148-9de9-463b-9748-90886066b077",
    title: "War",
    year: 1992,
    cover: "http://dummyimage.com/223x100.png/5fa2dd/ffffff",
    description:
      "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    duration: 94,
    contentRating: "G",
    source:
      "https://washington.edu/sem/fusce/consequat/nulla/nisl/nunc/nisl.aspx",
    tags: ["Comedy"],
  },
  {
    id: "9b849b84-4da6-4bda-9206-86141e96e23f",
    title: "Flamingo Kid, The",
    year: 1989,
    cover: "http://dummyimage.com/132x100.png/ff4444/ffffff",
    description:
      "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
    duration: 39,
    contentRating: "PG-13",
    source: "https://163.com/est.js",
    tags: ["Action", "Comedy|Crime|Drama", "Comedy|Drama"],
  },
  {
    id: "6888eebd-ef1d-4863-9175-784d6368cc4d",
    title: "Lonely Hearts",
    year: 1984,
    cover: "http://dummyimage.com/242x100.png/cc0000/ffffff",
    description:
      "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
    duration: 17,
    contentRating: "PG-13",
    source: "http://virginia.edu/varius/ut/blandit/non/interdum/in/ante.jsp",
    tags: [
      "Thriller",
      "Comedy|Horror",
      "Drama|Romance",
      "Adventure|Comedy|Drama",
    ],
  },
  {
    id: "fc7f081c-7952-4a29-aaff-6da2eeca2f77",
    title: "Juggernaut",
    year: 2010,
    cover: "http://dummyimage.com/217x100.png/5fa2dd/ffffff",
    description:
      "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    duration: 64,
    contentRating: "NC-17",
    source:
      "http://skyrock.com/etiam/vel/augue/vestibulum/rutrum/rutrum/neque.xml",
    tags: ["Drama", "Crime|Drama|Thriller", "Drama|Romance"],
  },
  {
    id: "41fa5f68-f141-42fc-9ff7-bc8f6afd7d56",
    title: "Problem Child",
    year: 2008,
    cover: "http://dummyimage.com/218x100.png/dddddd/000000",
    description:
      "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
    duration: 57,
    contentRating: "PG",
    source: "http://cloudflare.com/vel/augue/vestibulum/rutrum/rutrum.png",
    tags: ["Drama", "(no genres listed)", "Action", "Drama"],
  },
  {
    id: "15319d61-e938-4009-9a4c-b0bc966c1f80",
    title: "King's Ransom",
    year: 2005,
    cover: "http://dummyimage.com/186x100.png/5fa2dd/ffffff",
    description:
      "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    duration: 79,
    contentRating: "NC-17",
    source: "https://facebook.com/curabitur/gravida.png",
    tags: [
      "Adventure|Children|Fantasy",
      "Action",
      "Action|Drama|Thriller|War",
      "Drama|Romance",
      "Thriller",
    ],
  },
  {
    id: "a27b46a8-d12e-4c08-a2bd-8e24d6634d14",
    title: "Prom Night III: The Last Kiss",
    year: 2006,
    cover: "http://dummyimage.com/237x100.png/ff4444/ffffff",
    description:
      "Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
    duration: 72,
    contentRating: "NC-17",
    source: "https://lulu.com/donec/posuere/metus.png",
    tags: ["Horror"],
  },
  {
    id: "18553433-8282-4734-8ffc-10eba68548b6",
    title: "King Kong vs. Godzilla (Kingukongu tai Gojira)",
    year: 1966,
    cover: "http://dummyimage.com/147x100.png/5fa2dd/ffffff",
    description:
      "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
    duration: 74,
    contentRating: "PG-13",
    source: "http://gizmodo.com/sollicitudin/vitae/consectetuer.aspx",
    tags: ["Comedy|Romance"],
  },
  {
    id: "09214ccc-1782-4c24-85d1-d73b4418043e",
    title: "The Sky Dragon",
    year: 2012,
    cover: "http://dummyimage.com/165x100.png/5fa2dd/ffffff",
    description:
      "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    duration: 59,
    contentRating: "PG",
    source: "http://wsj.com/erat/curabitur/gravida/nisi/at/nibh/in.json",
    tags: ["Documentary"],
  },
  {
    id: "312171af-cb36-46ea-a764-a11bd23a1e0a",
    title: "Battle of the Bulge",
    year: 2004,
    cover: "http://dummyimage.com/216x100.png/5fa2dd/ffffff",
    description:
      "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
    duration: 32,
    contentRating: "PG",
    source: "http://unblog.fr/consequat/in/consequat/ut/nulla.xml",
    tags: ["Drama", "Drama"],
  },
  {
    id: "3121dc47-bdcf-466f-8cef-30bb98db82e1",
    title: "Christmas Story, A",
    year: 2011,
    cover: "http://dummyimage.com/130x100.png/ff4444/ffffff",
    description:
      "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",
    duration: 72,
    contentRating: "PG-13",
    source: "https://home.pl/sit/amet/eleifend/pede.png",
    tags: ["Action|Animation"],
  },
];


function filteredMoviesMock(tag) {
  return moviesMock.filter(movie => movie.tags.includes(tag));
}

class MoviesServiceMock {
  async getMovies() {
    return Promise.resolve(moviesMock);
  }

  async createMovie() {
    return Promise.resolve(moviesMock[0]);
  }
}

module.exports = {
  moviesMock,
  filteredMoviesMock,
  MoviesServiceMock
};