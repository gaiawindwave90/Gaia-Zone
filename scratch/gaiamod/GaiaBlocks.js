(function(Scratch) {
    const variables = {};
    let vm = Scratch.vm

    if (!Scratch.extensions.unsandboxed) {
      throw new Error('This extension must run unsandboxed');
    }

    let CloseTabDisabled = true;

    window.addEventListener("beforeunload", (e) => {
      if (CloseTabDisabled) {
        e.preventDefault();
      }
    });



class GaiaBlocks {
  constructor(runtime) {
    this.runtime = runtime;
  }

  getInfo() {
    return {
      id: 'gaiaBlocks',
      name: 'Gaia\'s Utilities',
	  color1: "#2BA6E1",
menuIconURI: "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyNzQuMTk1MzYiIGhlaWdodD0iMjYyLjg3MDMyIiB2aWV3Qm94PSIwLDAsMjc0LjE5NTM2LDI2Mi44NzAzMiI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE4NS4xNTIzMywtMTkuNTQ1NDgpIj48ZyBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiM0ZDVlZmYiIHN0cm9rZS13aWR0aD0iMTUiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCI+PHBhdGggZD0iTTMyMi4yNSw0Mi41MzkzN2wyOC41NTMxNyw4Mi43NTIyMmw4Ni45NDY4MywxLjc4NDk3bC02OS4zLDUyLjkyODY1bDI1LjE4MjkzLDgzLjg1NTM5bC03MS4zODI5MiwtNTAuMDQwNTJsLTcxLjM4MjkyLDUwLjA0MDUybDI1LjE4MjkzLC04My44NTUzOWwtNjkuMywtNTIuOTI4NjVsODYuOTQ2ODMsLTEuNzg0OTd6Ii8+PC9nPjwvZz48L3N2Zz48IS0tcm90YXRpb25DZW50ZXI6MTM0Ljg0NzY3MTI4MjAyMDI6MTYwLjQ1NDUyNDIxMzgwOTc1LS0+",
blockIconURI: "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyNzQuMTk1MzYiIGhlaWdodD0iMjYyLjg3MDMyIiB2aWV3Qm94PSIwLDAsMjc0LjE5NTM2LDI2Mi44NzAzMiI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE4NS4xNTIzMywtMTkuNTQ1NDgpIj48ZyBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiM0ZDVlZmYiIHN0cm9rZS13aWR0aD0iMTUiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCI+PHBhdGggZD0iTTMyMi4yNSw0Mi41MzkzN2wyOC41NTMxNyw4Mi43NTIyMmw4Ni45NDY4MywxLjc4NDk3bC02OS4zLDUyLjkyODY1bDI1LjE4MjkzLDgzLjg1NTM5bC03MS4zODI5MiwtNTAuMDQwNTJsLTcxLjM4MjkyLDUwLjA0MDUybDI1LjE4MjkzLC04My44NTUzOWwtNjkuMywtNTIuOTI4NjVsODYuOTQ2ODMsLTEuNzg0OTd6Ii8+PC9nPjwvZz48L3N2Zz48IS0tcm90YXRpb25DZW50ZXI6MTM0Ljg0NzY3MTI4MjAyMDI6MTYwLjQ1NDUyNDIxMzgwOTc1LS0+",
      blocks: [
        {
          opcode: 'currentDate',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Current date',
        },
        {
          opcode: 'isOnline',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'Online?',
        },
        {
          opcode: 'cookiesEnabled',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'Cookies enabled?',
        },
        {
          opcode: 'hostname',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Hostname',
        },
        {
          opcode: 'isWindowClosed',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'is window closed?',
        },
		{
            opcode: "closeTabDisabled",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "closing tab enabled without asking?",
        },
		/////lol
      ],
    };
  }

  currentDate() {
   // Get the current date
        const today = new Date();

        // Define an array of month names
        const monthNames = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        
        // Get the month name (using getMonth() which returns 0-11)
        const month = monthNames[today.getMonth()];

        // Get the day of the month
        const day = today.getDate();
        
      const year = today.getFullYear();

        // Format the date string
        const formattedDate = `${month} ${day}, ${year}`;
	  
            return formattedDate;
  }
  
  isOnline() {
     return navigator.onLine;
  }
  
  cookiesEnabled() {
     return navigator.cookieEnabled;
  }
  hostname() {
     return location.hostname;
  }
  
  isWindowClosed() {
     return window.closed;
  }
   closeTabDisabled() {
            return CloseTabDisabled;
   }
}
    Scratch.extensions.register(new GaiaBlocks(Scratch.vm.runtime));
})(Scratch);