class Options {
	constructor (height='100px', width='100px', bg='red', fontSize='12px', textAlign='center') {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }

	create(text) {
		let div = document.createElement('div');
		div.style.cssText = `height: ${this.height};
							 width: ${this.width};
							 background: ${this.bg};
							 font-size: ${this.fontSize};
							 text-align: ${this.textAlign};`;
		div.innerHTML = text;
		document.body.appendChild(div);					
	}
}

let div1 = new Options(),
	div2 = new Options('300px','300px','blue','32px','right');

div1.create("что там?");
div2.create("не вижу!");