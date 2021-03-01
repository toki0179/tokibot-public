const { ShardingManager } = require('discord.js');
const { token } = require('./config');

const manager = new ShardingManager('./bot.js', {
    token: token,
    totalShards: "auto", //change this to the amount of shards
    shardList: "auto", //change this to an array or keep at auto
    respawn: false // change this to true if you would like shards automatically respawn upon exiting
});

manager.on("shardCreate", shard => console.log(`[ ShardManager ] Launching shard #${shard.id}`));
manager.spawn();
