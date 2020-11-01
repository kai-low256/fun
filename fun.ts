//roll a dice with <sides>
commands.on(
  'roll',
  (args) => ({
    sides: args.integerOptional()
  }),
  async (message, { sides }) => {
    sides = sides || 6;

    const result = Math.ceil(Math.random() * sides);
    message.reply(
      new discord.Embed({
        title: `${message.author.getTag()}'s Roll`,
        color: (Math.random() * 0xffffff) | 0,
        description: `🎲 You Landed on **${result}!**`,
        footer: {
          text: '%help'
        }
      }).setTimestamp(new Date().toISOString())
    );
  }
);

//sus rating
function randomChoice<T>(items: T[]): T {
  return items[(items.length * Math.random()) | 0];
}

commands.on(
  'susrate',
  (args) => ({
    user: args.userOptional()
  }),
  async (message, { user }) => {
    await message.addReaction('🔌');
    if (user !== null) {
      const richEmbed = new discord.Embed();
      richEmbed.setTitle(
        `Sus Calculator ${discord.decor.Emojis.ELECTRIC_PLUG}`
      );
      richEmbed.setDescription(
        `${user?.getTag()} is **${(Math.random() * 101) | 0}%** Sus ${
          discord.decor.Emojis.WAVE
        }`
      );
      richEmbed.setThumbnail({ url: user?.getAvatarUrl() });
      richEmbed.setColor((Math.random() * 0xffffff) | 0);
      richEmbed.addField({
        name: '**ID:**',
        value: user.id,
        inline: false
      });
      await message.reply({ content: '', embed: richEmbed });
      return;
    } else {
      const embed = new discord.Embed();
      embed.setTitle(`Sus Calculator ${discord.decor.Emojis.ELECTRIC_PLUG}`);
      embed.setDescription(
        `${message.author.getTag()} is **${(Math.random() * 101) | 0}%** Sus ${discord.decor.Emojis.WAVE}`
      );
      embed.setColor((Math.random() * 0xffffff) | 0);
      embed
        .addField({
          name: '**ID:**',
          value: `${message.author.id}`,
          inline: false
        })
        .setThumbnail({ url: message.author.getAvatarUrl() });
      await message.reply({ content: '', embed: embed });
      return;
    }
  }
);

//wish somebody happy birthday
commands.on(
  'wishbirth',
  (args) => ({
    member: args.guildMember()
  }),
  async (message, { member }) => {
    await message.reply(
      new discord.Embed({
        title: `Looks like its somebody's birthday today`,
        description: `Happy birthday ${member.toMention()}!! :tada: :partying_face:`,
        color: 0xffff00,
        footer: {
          text: `You were wished happy birthday by ${message.author.getTag()}!`
        }
      })
    );
  }
);

//make your bot say something
commands.on(
  { name: 'message' },
  (args) => ({
    input: args.text()
  }),
  async (message, { input }) => {
    await message.reply(`${input}`);
  }
);

//will make you guess a number between 1-10
commands.on(
  'pick',
  (args) => ({
    guess: args.integer({
      maxValue: 10,
      minValue: 1
    })
  }),
  async (message, { guess }) => {
    const randomNumber = Math.ceil(Math.random() * 10);
    if (randomNumber !== guess) {
      await message.reply(
        `😢 Sorry. The number you wanted to guess was ${randomNumber}.`
      );
    } else {
      await message.reply(
        `🎉 Congrats! You guessed the number correctly. It was ${randomNumber}.`
      );
    }
  }
);

//describe a member
commands.on(
  'describe',
  (args) => ({
    name: args.string(),
    description: args.text()
  }),
  async (message, { name, description }) => {
    await message.reply(
      new discord.Embed({
        description: `${message.member.toMention()} says ${name} is ${description}`,
        color: 0xffff00
      })
    );
  }
);

//greet a new member
commands.on(
  'greet',
  (args) => ({
    member: args.guildMember()
  }),
  async (message, { member }) => {
    await message.reply(
      new discord.Embed({
        description: `Welcome to <server name>, ${member.toMention()}`,
        color: 0xffff00,
        footer: {
          text: `You were greeted by ${message.author.getTag()}!`
        }
      })
    );
  }
);

//hug a member
commands.on(
  'hug',
  (args) => ({
    name: args.text()
  }),
  async (message, { name }) => {
    await message.reply(
      new discord.Embed({
        description: `${message.author.toMention()} just hugged ${name}`,
        color: 0x00ff00,
        thumbnail: {
          url:
            'https://images-ext-1.discordapp.net/external/hdt4zZP7ygLTR5mKAQ2f3mmtMb3w79yb_xIixppE-kM/%3Fitemid%3D5026057/https/media1.tenor.com/images/24ac13447f9409d41c1aecb923aedf81/tenor.gif'
        }
      })
    );
  }
);

//kill a member
commands.on(
  'kill',
  (args) => ({
    name: args.text()
  }),
  async (message, { name }) => {
    await message.reply(
      new discord.Embed({
        description: `${name} was killed by ${message.author.username}
        may he/she rest in peace ${discord.decor.Emojis.SOB}`,
        color: 0xff0000,
      })
    );
  }
);
