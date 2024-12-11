function goToPage1() {
    document.getElementById('page4').classList.add('hidden');
    document.getElementById('page4').classList.add('hidden');
    document.getElementById('page3').classList.add('hidden');
    document.getElementById('page2').classList.add('hidden');
    document.getElementById('page1').classList.remove('hidden');
}

function goToPage2() {
    document.getElementById('page5').classList.add('hidden');
    document.getElementById('page4').classList.add('hidden');
    document.getElementById('page3').classList.add('hidden');
    document.getElementById('page1').classList.add('hidden');
    document.getElementById('page2').classList.remove('hidden');
}

function goToPage3(){
    document.getElementById('page1').classList.add('hidden');
    document.getElementById('page2').classList.add('hidden');
    document.getElementById('page4').classList.add('hidden');
    document.getElementById('page5').classList.add('hidden');
    document.getElementById('page3').classList.remove('hidden');    
}

function goToPage4(){
    document.getElementById('page1').classList.add('hidden');
    document.getElementById('page2').classList.add('hidden');
    document.getElementById('page3').classList.add('hidden');
    document.getElementById('page4').classList.remove('hidden');
}

function goToPage5(){
    document.getElementById('page1').classList.add('hidden');
    document.getElementById('page2').classList.add('hidden');
    document.getElementById('page3').classList.add('hidden');
    document.getElementById('page4').classList.add('hidden');
    document.getElementById('page5').classList.remove('hidden');
}

// Show page 1 by default
document.getElementById('page1').classList.remove('hidden');
                               
