$(document).ready(function() {

    const randomButton = document.querySelector('#quoter');
    const tweetButton = document.querySelector('#tweeter');
    const quote = document.querySelector('#quote');
    const quoteAuthor = document.querySelector('#quoteAuthor');
    const selectAuthor = document.querySelector('#selectAuthor');
    const tweetHref = 'https://twitter.com/share?hashtags=djquoter&text=';
    let author = "";

    const philosophers = [{
            name: 'Aristotle',
            quotes: ['The roots of education are bitter, but the fruit is sweet.', 'It is the mark of an educated mind to be able to entertain a thought without accepting it.', 'There is no great genius without some touch of madness.', 'What it lies in our power to do, it lies in our power not to do.',
                'Pleasure in the job puts perfection in the work.', 'The energy of the mind is the essence of life.', 'The aim of art is to represent not the outward appearance of things, but their inward significance.',
                'Courage is the first of human qualities because it is the quality which guarantees the others.', 'Those that know, do. Those that understand, teach.', 'The greatest virtues are those which are most useful to other persons.'
            ]
        },

        {
            name: 'Bruce Lee',
            quotes: ['Always be yourself, express yourself, have faith in yourself, do not go out and look for a successful personality and duplicate it.', 'If you love life, don\'t waste time, for time is what life is made up of.', 'A wise man can learn more from a foolish question than a fool can learn from a wise answer.', 'I fear not the man who has practiced 10,000 kicks once, but I fear the man who has practiced one kick 10,000 times.',
                'If you spend too much time thinking about a thing, you\'ll never get it done.', 'Notice that the stiffest tree is most easily cracked, while the bamboo or willow survives by bending with the wind.', 'As you think, so shall you become.',
                'Knowing is not enough; We must apply. Willing is not enough; We must do.', 'Defeat is a state of mind; No one is ever defeated until defeat has been accepted as a reality.', 'Those who are unaware they are walking in darkness will never seek the light.'
            ]
        },

        {
            name: 'Martin Luther King Jr',
            quotes: ['Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that.', 'The time is always right to do what is right.', 'Injustice anywhere is a threat to justice everywhere.', 'We must accept finite disappointment, but never lose infinite hope.', 'Nothing in all the world is more dangerous than sincere ignorance and conscientious stupidity.',
                'Our lives begin to end the day we become silent about things that matter.', 'The ultimate measure of a man is not where he stands in moments of comfort and convenience, but where he stands at times of challenge and controversy.', 'The ultimate tragedy is not the oppression and cruelty by the bad people but the silence over that by the good people.',
                'A riot is the language of the unheard', 'All progress is precarious, and the solution of one problem brings us face to face with another problem.'
            ]
        }
    ]

    philosophers.forEach(phil => {
        selectAuthor.options[selectAuthor.options.length] = new Option(phil.name, phil.name);
    })

    let selectedAuthor = "select";

    function randomizer() {
        const randomAuthor = Math.floor(Math.random() * philosophers.length);
        author = philosophers[randomAuthor].name;
        let authorWithComment = `<span class="fa fa-comment"></span>${author}`;
        quoteAuthor.innerHTML = authorWithComment;
        const randomQuote = Math.floor(Math.random() * philosophers[randomAuthor].quotes.length);
        quote.innerHTML = philosophers[randomAuthor].quotes[randomQuote];
    }

    function filteredRandomizer(selectedAuthor) {
        if (selectedAuthor === "select") return;
        let filteredPhil = philosophers.filter(phil => {
            return phil.name === selectedAuthor;
        });
        author = filteredPhil[0].name;
        let authorWithComment = `<span class="fa fa-comment"></span>${author}`;
        quoteAuthor.innerHTML = authorWithComment;
        const randomQuote = Math.floor(Math.random() * filteredPhil[0].quotes.length);
        quote.innerHTML = filteredPhil[0].quotes[randomQuote];
    }

    function tweetMe() {
        let tweet = quote.innerHTML;
        tweetButton.href = `${tweetHref} ${tweet} -${author}`; /*Template Strings in action!!!! thanks js30*/
        $.getScript('https://platform.twitter.com/widgets.js');
    }

    selectAuthor.addEventListener('change', function() {
        selectedAuthor = selectAuthor.options[selectAuthor.selectedIndex].value
    });

    randomButton.addEventListener('click', () => {
        selectedAuthor === "select" ? randomizer() : filteredRandomizer(selectedAuthor);
    });

    tweetButton.addEventListener('click', tweetMe);

    window.onload = randomizer;

})
