const Telegraf = require('telegraf');

const bot = new Telegraf('6111931339:AAGeMdnMbwumJM36jLbIZj088pvn4wJnXq4');


// `What this bot can do:


bot.start((ctx) => {
    bot.telegram.sendPhoto(ctx.chat.id, {
        source: 'images/telegraf.png'},
        {
        caption: `💫 Welcome to Telegraf Helper Bot!

Here you will find a list of useful commands and code snippets to help develop your bot using <code>telegraf.js</code>.

Send "<code>/help</code>" as a message to get to the <strong><em><u>help reference</u></em></strong> menu.

Send "<code>/start</code>" as a message to <strong><em><u>restart</u></em></strong> the bot.`,
        parse_mode: 'HTML'    
    })
})


bot.command('help', ctx => {
    bot.telegram.sendMessage(ctx.chat.id, `<strong>HELP REFERENCE</strong>
Below you'll find a list with the
commands available in this bot. 

Say something to me:
<strong>/start</strong> - Start or restart the bot

<strong>/help</strong> - Help reference

<strong>/markdownV2</strong> - MarkdownV2 syntax

<strong>/html</strong> - Available html syntax

<strong>/html2</strong> - Available entity html syntax

    `, {
        parse_mode: 'HTML'
    })
});

// MarkdownV2
bot.command('markdownV2', (ctx) => {
    const rawMsg = `
*Bold Text*
_Italic Text_
__Underline__
~Strike through~
||Spoiler||
*bold _italic bold ~italic bold strikethrough ||italic bold strikethrough spolier||~__underline italic bold___ bold*
[Inline URL](https://www.example.com)
[Inline mention of a user](tg://user?id=887456566)
![👍🏾](tg://emoji?id=5368324170671202286)
\`inline fixed-width code\`
\`\`\`
pre-formatted fixed width code block
\`\`\`

\`\`\`
pre-formatted fixed width code block written in the Python programming language
\`\`\`
- List Item 1
- List Item 2
> Blockquote

\`Inline Code\`
\`\`\`
Code Block
\`\`\`

Parses into:
👇🏾
`;
    const renderedMsg = `
*Bold Text*
\_Italic Text\_
\_\_Underline\_\_
~Strike through~
||Spoiler||
*bold \_italic bold ~italic bold strikethrough ||italic bold strikethrough spolier||~\_\_underline italic bold\_\_\_ bold*
[Inline URL](https://www.example.com)
[Inline mention of a user](tg://user?id=887456566)
![👍🏾](tg://emoji?id=5368324170671202286)
\`inline fixed-width code\`

\`\`\`
pre-formatted fixed width code block
\`\`\`

\`\`\`python
pre-formatted fixed width code block written in the Python programming language
\`\`\`

\`Inline Code\`

\`\`\`
Code Block
\`\`\`
\\- List Item 1
\\- List Item 2
\\> Blockquote


`;

bot.telegram.sendMessage(ctx.chat.id, rawMsg)
.then(bot.telegram.sendMessage(ctx.chat.id, renderedMsg, { parse_mode: 'MarkdownV2' }));
});



// HTML
bot.command('html', async (ctx) => {
    const rawMsg = `
<b> Bold text </b>
<strong> Bold text </strong>
<i> Italic text </i>
<em> Italic text </>
<u> Underlined text  </u>
<s> Strikethrough text</s>
<strike> Strikethrough text</strike>
<del> Strikethrough text</del>
<code> Monospace (inline code) text </code>
<pre> Preformatted text or code block </pre>
<a href="www.google.com">text</a>: Inline hyperlink
* List Item 1
* List Item 2

Parses into:
👇🏾
`;

    const renderedMsg = `<b> Bold text </b>
<strong> Bold text </strong>
<i> Italic text </i>
<em> Italic text </>
<u> Underlined text  </u>
<s> Strikethrough text</s>
<strike> Strikethrough text</strike>
<del> Strikethrough text</del>
<code>Monospace (inline code) text</code>
<pre>Preformatted text or code block</pre>
<a href="www.google.com">text</a>: Inline hyperlink
* List Item 1
* List Item 2
`;
    await bot.telegram.sendMessage(ctx.chat.id, rawMsg)
    .then(bot.telegram.sendMessage(ctx.chat.id, renderedMsg, {
        parse_mode: 'HTML'
    }));

    
});

//HTML Entities
bot.command('html2', (ctx) => {
    const rawMsg = `
To use HTML tags in your text without them being mistaken for actual HTML tags when using parse_mode set to HTML, you can escape the special characters by replacing them with their corresponding HTML entities. Here are some commonly used HTML entities:

`<` is replaced by &lt;
`>` is replaced by &gt;
`&` is replaced by &amp;

Parses into:
👇🏾
`;

    const renderedMsg = `
To use HTML tags in your text without them being mistaken for actual HTML tags when using parse_mode set to HTML, you can escape the special characters by replacing them with their corresponding HTML entities. Here are some commonly used HTML entities:

`<` is replaced by &lt;
`>` is replaced by &gt;
`&` is replaced by &amp;
`;
    bot.telegram.sendMessage(ctx.chat.id, rawMsg)
    .then(bot.telegram.sendMessage(ctx.chat.id, renderedMsg, {
        parse_mode: 'MarkdownV2',
        disable_notification: true
    }));

});

try {
    bot.launch();
    console.log('Bot started successfully');
} catch (error) {
    console.error('Error starting bot: ', error);
}
