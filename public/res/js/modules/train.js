class Train {
  constructor(domElement) {
    this.domElement = domElement;
  }

  static initialize() {
    (document.querySelectorAll('.train')).forEach(trainDomElement => new Train(trainDomElement));
  }
}

Train.initialize();
