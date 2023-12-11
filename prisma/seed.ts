const PrismaClient = require("@prisma/client").PrismaClient;

const prisma = new PrismaClient();

const seed = async () => {
  await prisma.leadMagic.create({
    data: {
      id: "123456789",
      draftBody: "This is a draft body",
      draftEmailCapture: "This is a draft email capture",
      draftFirstQuestion: "This is a draft first question",
      draftPrompt: "This is a draft prompt",
      draftSubtitle: "This is a draft subtitle",
      draftTitle: "This is a draft title",
      name: "This is a name",
      publishedBody: "This is a published body",
      publishedEmailCapture: "This is a published email capture",
      publishedFirstQuestion: "This is a published first question",
      publishedPrompt: "This is a published prompt",
      publishedSubtitle: "This is a published subtitle",
      publishedTitle: "This is a published title",
      slug: "lead-magic-slug",
      status: "draft",
      userId: "user_2ZNaTJwCrSJiHBiX2Gcu72ERSCL",
    },
  });

  await prisma.lead.createMany({
    data: [
      {
        name: "Dummy User 1",
        email: "dummy1@gmail.com",
        leadMagicId: "123456789",
        userId: "user_2ZNaTJwCrSJiHBiX2Gcu72ERSCL",
      },
      {
        name: "Dummy User 2",
        email: "dummy2@gmail.com",
        leadMagicId: "123456789",
        userId: "user_2ZNaTJwCrSJiHBiX2Gcu72ERSCL",
      },
    ],
  });
};

// Run the seedDatabase function
seed()
  .then(() => {
    console.log("Seeding completed successfully");
  })
  .catch((error) => {
    console.error("Error seeding the database:", error);
  });