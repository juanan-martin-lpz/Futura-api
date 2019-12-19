let mongoose = require('mongoose');

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');

let host = 'http://localhost:3000';

let should = chai.should();
let expect = require('chai').expect;


chai.use(chaiHttp);

let ClassD = require('../models/classdef');
let PropD = require('../models/propertydef');

describe('Creacion de un objetos', () => {
    it('Deberia crear un objeto con una propiedad', done => {
            var klass = new ClassD();

            klass.name = "testClass";

            var p = new PropD();
            p.name = 'testprop';
            p.type = 'String';

            //var p = { 'testprop': undefined };

            klass.properties.addToSet(p);

            var obj = klass.getObject();



            expect(obj).to.deep.equal({ testprop: undefined });

            done();
        }),

        it('Deberia crear un objeto con varias propiedades', done => {
            var klass = new ClassD();

            klass.name = "testClass";

            var p1 = new PropD();
            p1.name = 'testprop1';
            p1.type = 'String';

            var p2 = new PropD();
            p2.name = 'testprop2';
            p2.type = 'String';

            var p = new PropD();
            p3.name = 'testprop3';
            p3.type = 'String';

            klass.properties.addToSet(p1);
            klass.properties.addToSet(p2);
            klass.properties.addToSet(p3);

            var obj = klass.getObject();



            expect(obj).to.deep.equal({ testprop1: undefined, testprop2: undefined, testprop3: undefined });

            done();
        });

});