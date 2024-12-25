<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Restaurant extends Model
{
    use HasFactory;

    protected $fillable = [
        'proprietaire_prenom',
        'proprietaire_nom',
        'nom',
        'adresse',
        'rdv',
    ];

    protected $casts = [
        'rdv' => 'datetime',
    ];
}
