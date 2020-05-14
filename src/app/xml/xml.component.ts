import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Renderer2, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-xml',
  templateUrl: './xml.component.html',
  styleUrls: ['./xml.component.css']
})
export class XmlComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('myTree') myTree: ElementRef;
  data: string;
  oDOM: Document;
  root: string;
  clickListener: any[];

  constructor(private renderer: Renderer2) {
    this.data = `<catalog><book id="bk101"><author>Gambardella, Matthew</author><title>XML Developer's Guide</title><genre>Computer</genre><price>44.95</price><publish_date>2000-10-01</publish_date><description>An in-depth look at creating applicationswith XML.</description></book><book id="bk102"><author>Ralls, Kim</author><title>Midnight Rain</title><genre>Fantasy</genre><price>5.95</price><publish_date>2000-12-16</publish_date><description>A former architect battles corporate zombies,an evil sorceress, and her own childhood to become queenof the world.</description></book><book id="bk103"><author>Corets, Eva</author><title>Maeve Ascendant</title><genre>Fantasy</genre><price>5.95</price><publish_date>2000-11-17</publish_date><description>After the collapse of a nanotechnologysociety in England, the young survivors lay thefoundation for a new society.</description></book><book id="bk104"><author>Corets, Eva</author><title>Oberon's Legacy</title><genre>Fantasy</genre><price>5.95</price><publish_date>2001-03-10</publish_date><description>In post-apocalypse England, the mysteriousagent known only as Oberon helps to create a new lifefor the inhabitants of London. Sequel to MaeveAscendant.</description></book><book id="bk105"><author>Corets, Eva</author><title>The Sundered Grail</title><genre>Fantasy</genre><price>5.95</price><publish_date>2001-09-10</publish_date><description>The two daughters of Maeve, half-sisters,battle one another for control of England. Sequel toOberon's Legacy.</description></book><book id="bk106"><author>Randall, Cynthia</author><title>Lover Birds</title><genre>Romance</genre><price>4.95</price><publish_date>2000-09-02</publish_date><description>When Carla meets Paul at an ornithologyconference, tempers fly as feathers get ruffled.</description></book><book id="bk107"><author>Thurman, Paula</author><title>Splish Splash</title><genre>Romance</genre><price>4.95</price><publish_date>2000-11-02</publish_date><description>A deep sea diver finds true love twentythousand leagues beneath the sea.</description></book><book id="bk108"><author>Knorr, Stefan</author><title>Creepy Crawlies</title><genre>Horror</genre><price>4.95</price><publish_date>2000-12-06</publish_date><description>An anthology of horror stories about roaches,centipedes, scorpions  and other insects.</description></book><book id="bk109"><author>Kress, Peter</author><title>Paradox Lost</title><genre>Science Fiction</genre><price>6.95</price><publish_date>2000-11-02</publish_date><description>After an inadvertant trip through a HeisenbergUncertainty Device, James Salway discovers the problemsof being quantum.</description></book><book id="bk110"><author>O'Brien, Tim</author><title>Microsoft .NET: The Programming Bible</title><genre>Computer</genre><price>36.95</price><publish_date>2000-12-09</publish_date><description>Microsoft's .NET initiative is explored indetail in this deep programmer's reference.</description></book><book id="bk111"><author>O'Brien, Tim</author><title>MSXML3: A Comprehensive Guide</title><genre>Computer</genre><price>36.95</price><publish_date>2000-12-01</publish_date><description>The Microsoft MSXML3 parser is covered indetail, with attention to XML DOM interfaces, XSLT processing,SAX and more.</description></book><book id="bk112"><author>Galos, Mike</author><title>Visual Studio 7: A Comprehensive Guide</title><genre>Computer</genre><price>49.95</price><publish_date>2001-04-16</publish_date><description>Microsoft Visual Studio 7 is explored in depth,looking at how Visual Basic, Visual C++, C#, and ASP+ areintegrated into a comprehensive developmentenvironment.</description></book></catalog>`;
  }

  ngOnInit(): void {
    const oParser: DOMParser = new DOMParser();
    this.oDOM = oParser.parseFromString(this.data, 'application/xml');
    this.clickListener = [];
  }

  ngAfterViewInit() {
    this.createTreeView(this.oDOM.documentElement, this.myTree.nativeElement);
  }



  createTreeView(elem: ChildNode | Element | Text, ul: Element) {
    let nodeName;
    while (elem) {
      nodeName = this.getNodeName(elem);
      const li = this.createLi(nodeName, elem);
      ul.appendChild(li);
      if (elem.hasChildNodes()) {
        const childUl = this.renderer.createElement('ul');
        childUl.setAttribute('class', 'ulist nested');
        li.appendChild(childUl);
        this.createTreeView(elem.childNodes[0], childUl);
      }
      if (elem.nodeType === 1) {
        const endtag =  this.renderer.createElement('li');
        endtag.innerHTML = this.getEndTag(nodeName);
        endtag.setAttribute('class', 'end-tag nested');
        ul.appendChild(endtag);
      }
      elem = elem.nextSibling;
    }
  }

  getNodeName(elem: ChildNode | Element | Text): string | number {
    if (elem.nodeType === 1) {
      return elem.nodeName;
    } else if (elem.nodeType === 3) {
      return elem.nodeValue;
    }
  }

  getStartEndTag(name: string, elem: ChildNode | Element | Text): string {
    return `${this.getStartTag(name, elem)}<span>..&lt;/${name}&gt;</span>`;
  }
  getStartTag(name: string, elem: ChildNode | Element | Text): string {
    const attr = this.getAttributes(elem);
    return `&lt;${name}${attr}&gt;`;
  }
  getEndTag(name: string): string {
    return `&lt;/${name}&gt;`;
  }
  getAttributes(elem: ChildNode | Element | Text): string {
    let element;
    if (elem.nodeType === 1) {
      let arr = [];
      let str;
      element = elem as Element;
      arr = Array.from(element.attributes);
      str = arr.reduce((prev, current, index) => {
        console.log(prev);
        return prev + ` ${current.name} = "${current.nodeValue}"`;
      }, '');
      return str;
    }
    return '';
  }

  createLi(val: string, elem: ChildNode | Element | Text) {
    const li = this.renderer.createElement('li');
    const listener = this.renderer.listen(li, 'click', (event: MouseEvent) => {
      console.log('clicked');
      if (Array.from(li.classList).find(elementClass => elementClass === 'open')) {
        // Collapse the tree
        this.renderer.removeClass(li, 'open');
        this.renderer.addClass(li, 'list');
        this.renderer.removeStyle(li.childNodes[1], 'display');
        this.renderer.addClass(li.childNodes[2], 'nested');
        this.renderer.addClass(li.nextSibling, 'nested');
      } else {
        // Expand the tree
        this.renderer.removeClass(li, 'list');
        this.renderer.addClass(li, 'open');
        this.renderer.addClass(li.childNodes[1], 'nested');
        this.renderer.setStyle(li.childNodes[1], 'display', 'none');
        this.renderer.removeClass(li.childNodes[2], 'nested');
        this.renderer.removeClass(li.nextSibling, 'nested');
      }
      event.stopPropagation();
    });
    this.clickListener.push(listener);
    if (elem.nodeType === 1) {
      li.setAttribute('class', 'list');
      li.innerHTML = this.getStartEndTag(val, elem);
    } else if (elem.nodeType === 3) {
      li.setAttribute('class', 'list remove-bullet');
      li.innerHTML = val;
    }
    return li;
  }



  ngOnDestroy() {
    if (!!this.clickListener && this.clickListener.length > 0) {
      this.clickListener.forEach(listener => {
        listener();
      });
    }
  }
}
