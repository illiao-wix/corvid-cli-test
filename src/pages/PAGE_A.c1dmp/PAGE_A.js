$w.onReady(() => {
    $w('#text2').text = 'Meh!';
    for (let i = 0; i < 15; i++) {
        console.log('Loop', i);
    }
})