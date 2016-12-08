<?php

namespace App;

use Log;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    protected $fillable = ['name'];

    public function user()
    {
        Log::info("user start");
        return $this->belongsTo(User::class);
    }
}
