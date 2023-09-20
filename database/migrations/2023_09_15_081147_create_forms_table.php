<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('forms', function (Blueprint $table) {
            $table->id();
            $table->string("first_name")->nullable();
            $table->string("last_name")->nullable();
            $table->string("mobile")->nullable();
            $table->string("height")->nullable();
            $table->string("weight")->nullable();
            $table->string("age")->nullable();
            $table->string("sports_history")->nullable();
            $table->timestamp("modified_date");
            $table->text("illness")->nullable();
            $table->text("purpose")->nullable();
            $table->string("use_duration")->nullable();
            $table->boolean("is_payed")->default(false);
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('forms');
    }
};
