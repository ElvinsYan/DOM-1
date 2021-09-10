const div1 = dom.create("<div><span>div1</span></div>");
console.log(div1);

const div2 = dom.create("<div>div2</div>");
dom.after(after, div2);

const div3 = dom.create("<div>div3</div>");
dom.before(before, div3);

const div4 = dom.create("<div>append</div>");
dom.append(appendTest, div4);

const div5 = dom.create("<div id='parent'></div>");
dom.wrap(wrap, div5);

const nodes = dom.empty(window.empty);
console.log(nodes);

dom.attr(attribute, "title", "Hi, I am Elvins");
const title = dom.attr(attribute, "title");
console.log(`title: ${title}`);

dom.text(textTest, `你好，这是新的内容`);
console.log(dom.text(textTest));

dom.style(styleTest1, { border: "1px solid blue", color: "green" });
console.log(`border: ${dom.style(styleTest1, "border")}`);
dom.style(styleTest2, "border", "1px solid black");

dom.class.add(classTest, "blue");
dom.class.add(classTest, "green");
dom.class.remove(classTest, "blue");
console.log(dom.class.contains(classTest, "blue"));

const div = dom.find("#test1>.red")[1];
dom.style(div, "color", "blue");

const divList = dom.find(".red");
dom.each(divList, (n) => console.log(n));
