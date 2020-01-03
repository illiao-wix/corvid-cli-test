$w.onReady(() => {
    console.log('Page A Loaded!');
    console.log('Add new log =)');
    $w('#text2').text = 'Meh!';
    for (let i = 0; i < 10; i++) {
        console.log('new loop', i);
    }
})