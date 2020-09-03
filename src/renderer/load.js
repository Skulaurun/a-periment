/*
 *
 *   A-Periment - Custom minecraft launcher
 *   Copyright (C) 2020 Adam Charvát
 *
 *   A-Periment is free software: you can redistribute it and/or modify
 *   it under the terms of the GNU General Public License as published by
 *   the Free Software Foundation, either version 3 of the License, or
 *   (at your option) any later version.
 *
 *   A-Periment is distributed in the hope that it will be useful,
 *   but WITHOUT ANY WARRANTY; without even the implied warranty of
 *   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 *   GNU General Public License for more details.
 *
 *   You should have received a copy of the GNU General Public License
 *   along with a-periment. If not, see <https://www.gnu.org/licenses/>.
 *
 */

const { ipcRenderer } = electron;

let statusBar = null;
document.addEventListener("DOMContentLoaded", () => {

    statusBar = document.getElementById("status-bar").children[0];
    statusBar.setValue = function(value) {
        this.style.width = `${value}%`;
    }
    statusBar.show() = function() {
        this.style.display = "block";
    }

});

ipcRenderer.on("update-available", () => {
    statusBar.show();
});

ipcRenderer.on("update-download-progress", (event, progress) => {
    statusBar.setValue(progress.percent);
});
