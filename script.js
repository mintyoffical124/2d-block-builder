document.addEventListener("DOMContentLoaded", () => {
    const gameArea = document.getElementById("game-area");
    const blockPicker = document.getElementById("block-picker");
    let selectedBlock = "dirt"; // Default block type

    const rows = 20;
    const columns = 30;

    // Initialize the grid
    for (let i = 0; i < rows * columns; i++) {
        const block = document.createElement("div");
        block.classList.add("block");
        gameArea.appendChild(block);

        // Add click event to toggle block
        block.addEventListener("click", () => {
            if (block.classList.contains(selectedBlock)) {
                block.className = "block"; // Remove block
            } else {
                block.className = `block ${selectedBlock}`; // Add block
            }
        });
    }

    // Handle block selection
    blockPicker.addEventListener("click", (e) => {
        if (e.target.tagName === "BUTTON") {
            selectedBlock = e.target.getAttribute("data-block");
        }
    });
});
