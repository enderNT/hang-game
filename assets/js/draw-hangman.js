// This function draws the canvas 
function startHangmanBoard() {
    let x = 300;
    let y = 400;
    pencil.fillStyle = '#F3F5FC';
    pencil.fillRect(0, 0, x, y);
}


function drawHangman(x, y) {
    pencil.strokeStyle = '#0A3871';
    pencil.lineWidth = 3;
    switch(attemps) {
        case 9: 
        // Attemp 1
            pencil.beginPath();
            pencil.moveTo(0, y-2);
            pencil.lineTo(x, y-2);
            pencil.stroke();
            break;
        case 8:
            // Attemp 2
            pencil.beginPath();
            pencil.moveTo(x*0.2, y);
            pencil.lineTo(x*0.2, 2);
            pencil.stroke();
            break;
        case 7:
            // Attemp 3
            pencil.beginPath();
            pencil.moveTo(x*0.2, 2);
            pencil.lineTo(x*0.7, 2);
            pencil.stroke();
            break;
        case 6:
            // Attemp 4
            pencil.beginPath();
            pencil.arc(x*0.7, y*0.2, y*0.08, 0, 2*3.14);
            pencil.stroke();
            break;
        case 5:
            // Attemp 5
            pencil.beginPath();
            pencil.moveTo(x*0.7, y*0.28);
            pencil.lineTo(x*0.7, y*0.7);
            pencil.stroke();
            break;
        case 4:
            // Attemp 6
            pencil.beginPath();
            pencil.moveTo(x*0.7, y*0.7);
            pencil.lineTo(x*0.5, y*0.9);
            pencil.stroke();
            break;
        case 3:
            // Attemp 7
            pencil.beginPath();
            pencil.moveTo(x*0.7, y*0.7);
            pencil.lineTo(x*0.9, y*0.9);
            pencil.stroke();
            break;
        case 2: 
            // Attemp 8
            pencil.beginPath();
            pencil.moveTo(x*0.7, y*0.4);
            pencil.lineTo(x*0.5, y*0.6);
            pencil.stroke();
            break;
        case 1:    
            // Attemp 9
            pencil.beginPath();
            pencil.moveTo(x*0.7, y*0.4);
            pencil.lineTo(x*0.9, y*0.6);
            pencil.stroke();
            break;
        case 0:
            // Attemp 10
            pencil.beginPath();
            pencil.moveTo(x*0.7, 2);
            pencil.lineTo(x*0.7, y*0.12);
            pencil.stroke();
            youLost('¡Perdiste!');
            break;
    }
}