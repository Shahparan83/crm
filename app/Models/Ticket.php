<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Ticket extends Model
{
    protected $fillable = [
        'name',
        'contact_number',
        'email',
        'problem',
        'status',
    ];

    public function replies()
    {
        return $this->hasMany(TicketReply::class);
    }
}
