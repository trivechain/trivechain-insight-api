'use strict';

var sinon = require('sinon');
var should = require('should');
var SporkController = require('../lib/sporks');

describe('Spork', function () {
	describe('/spork', function () {
		var SporkList = {
			"sporks": {
				"SPORK_2_DIRECTSEND_ENABLED": 0,
				"SPORK_3_DIRECTSEND_BLOCK_FILTERING": 0,
				"SPORK_5_DIRECTSEND_MAX_VALUE": 2000,
				"SPORK_8_MASTERNODE_PAYMENT_ENFORCEMENT": 0,
				"SPORK_9_SUPERBLOCKS_ENABLED": 0,
				"SPORK_10_MASTERNODE_PAY_UPDATED_NODES": 0,
				"SPORK_12_RECONSIDER_BLOCKS": 0,
				"SPORK_13_OLD_SUPERBLOCK_FLAG": 4070908800,
				"SPORK_14_REQUIRE_SENTINEL_FLAG": 4070908800
			}
		};
		var node = {
			services: {
        trivechaind: {
					getSpork: sinon.stub().callsArgWith(0, null, SporkList)
				}
			}
		};

		var sporks = new SporkController(node);

		it('get spork', function (done) {
			var req = {};
			var res = {
				jsonp: function (data) {
					should.exist(data.sporks);
					should.exist(data.sporks.SPORK_2_DIRECTSEND_ENABLED);
					should.exist(data.sporks.SPORK_3_DIRECTSEND_BLOCK_FILTERING);
					should.exist(data.sporks.SPORK_5_DIRECTSEND_MAX_VALUE);
					should.exist(data.sporks.SPORK_8_MASTERNODE_PAYMENT_ENFORCEMENT);
					should.exist(data.sporks.SPORK_9_SUPERBLOCKS_ENABLED);
					should.exist(data.sporks.SPORK_10_MASTERNODE_PAY_UPDATED_NODES);
					should.exist(data.sporks.SPORK_12_RECONSIDER_BLOCKS);
					should.exist(data.sporks.SPORK_13_OLD_SUPERBLOCK_FLAG);
					should.exist(data.sporks.SPORK_14_REQUIRE_SENTINEL_FLAG);
					done();
				}
			};

			sporks.list(req, res);
		});
	});
});
