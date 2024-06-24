function init() {
    const startButton = document.getElementById('button-start');
    const pauseButton = document.getElementById('button-pause');
    const stopButton = document.getElementById('button-stop');

    startButton.addEventListener('click', game.start);
    pauseButton.addEventListener('click', game.pause);
    stopButton.addEventListener('click', game.stop);
}

const GAME_STATUS_STARTED = 'started';
const GAME_STATUS_PAUSED = 'paused';
const GAME_STATUS_STOPPED = 'stopped';

const config = {
    size: 20
};

const game = {

    getElement() {
        return document.getElementById('game');
    },

    start() {
        game.setGameStatus(GAME_STATUS_STARTED);
        board.render();
        snake.render();
    },

    pause() {
        game.setGameStatus(GAME_STATUS_PAUSED);
    },

    stop() {
        game.setGameStatus(GAME_STATUS_STOPPED);
    },

    setGameStatus(status) {
        const element = game.getElement();
        element.classList.remove(GAME_STATUS_STARTED, GAME_STATUS_PAUSED, GAME_STATUS_STOPPED)
        element.classList.add(status);
    }
};

const board = {
    getElement() {
        return document.getElementById('board');
    },

    render() {
        const board = this.getElement();

        for (let i = 0; i < config.size ** 2; i++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.dataset.top = Math.trunc(i / config.size);
            cell.dataset.left = i % config.size;
            board.appendChild(cell);
        }
    }
};

const snake = {

    parts: [
        { top: 0, left: 0 },
        { top: 0, left: 1 },
        { top: 0, left: 2 },
    ],

    getCellElements() {
        return document.getElementsByClassName('cell')
    },

    render() {
        const cells = this.getCellElements();

        for (let cell of cells) {
            cell.classList.remove('snake');
        }

        for (let part of this.parts) {
            const cell = document.querySelector(`.cell[data-top="${part.top}"][data-left="${part.left}"]`);
            cell.classList.add('snake');
        }
    }

};

const food = {

};






window.addEventListener('load', init)